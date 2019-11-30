#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_cors;

extern crate reqwest;
extern crate select;
extern crate rocket_contrib;

use select::document::Document;
use select::predicate::{Class, Name, Predicate};
use reqwest::Url;
use std::io;

use rocket_contrib::serve::StaticFiles;

use rocket::http::Method; // 1.

use rocket_cors::{
    AllowedHeaders, AllowedOrigins, Error, // 2.
    Cors, CorsOptions // 3.
};

fn make_cors() -> Cors {
    let allowed_origins = AllowedOrigins::some_exact(&[ // 4.
        "http://localhost:8080",
        "http://localhost:3000",
        "http://127.0.0.1:8080",
        "http://localhost:8000",
        "http://0.0.0.0:8000",
    ]);

    CorsOptions { // 5.
        allowed_origins,
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(), // 1.
        allowed_headers: AllowedHeaders::some(&[
            "Authorization",
            "Accept",
            "Access-Control-Allow-Origin", // 6.
        ]),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building CORS")
}

const ahuzuturl : &str = "http://www.ahuzot.co.il/Parking/ParkingDetails/?ID=";

#[get("/<id>")]
fn index(id: u8) -> &'static str {
    let park_status = get_parkid_status(id).unwrap_or(status::NotAvailable);
    match park_status{
        status::Unknown => "unknown",
        status::Free => "free",
        status::NotAvailable => "not_available"
    }
}

enum status{
    Unknown,
    NotAvailable,
    Free
}

fn get_parkid_status(id : u8) -> Result<(status),reqwest::UrlError>{
    let build_url = format!("{}{}",ahuzuturl,id);
    let mut resp = reqwest::get(&build_url).unwrap();
    assert!(resp.status().is_success());

    let document = Document::from_read(resp).unwrap();

    let parkingdetail = document.find(Class("ParkingDetailsTable")).next();

    if parkingdetail.is_some(){
        let tag = parkingdetail.unwrap().find(Name("img")).next();
        if tag.is_some(){
            let img_url = tag.unwrap()
            .attr("src")
            .unwrap();
            let status_img = img_url.split("/").last().unwrap();
            return match status_img{
                "panui.png" => Ok(status::Free),
                _ => Ok(status::NotAvailable)
            };
        }
    }
    Ok(status::Unknown)

}

fn main() {
    rocket::ignite().mount("/status", routes![index]) 
    .mount("/", StaticFiles::from("static/"))
    .attach(make_cors()) // 7.
    .launch();
}