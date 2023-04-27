# REST API Dummy Data Furniture
powered by:
[![Node.js](https://img.shields.io/badge/-Node.js-green?style=for-the-badge)](https://nodejs.org) [![Express.js](https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge)](https://expressjs.com)
[![vercelbadge](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com)

REST API yang berisi dummy data produk furnitur mulai dari kursi, sofa, meja, lampu, laci, lemari, dan aksesoris lainnya. Data yang dikirim meliputi **id produk**, **nama produk**, **tipe produk**, **deskripsi produk**, **harga & currency produk**, serta **gambar produk** yang diambil dari situs penyedia gambar gratis [![Unsplash.com]()](https://unsplash.com). REST API ini cocok untuk anda yang masih belajar membuat sebuah **website toko furnitur** dengan **dummy data** yang diambil dari sebuah API yang **simpel dan gratis**.


## DEMO
https://furniture-dummy-data-api.vercel.app

## Endpoints
#### Get All Data
`GET, /data`
#### Response
```json
{
    "payload":[
        {
            "id":"frntrchc1",
            "type":"couch",
            "name":"Single Couch",
            "description":"Sofa kecil untuk satu orang yang sangat cocok untuk santai serambi membaca buku atau menyeduh teh hangat",
            "currency":"Rp",
            "price":1599000,
            "img_link":"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
        },
        {
            "id":"frntrchc2",
            "type":"couch",
            "name":"Big Size Sofa",
            "description":"Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan yang halus dan lembut sehingga nyaman di kulit",
            "currency":"Rp",
            "price":2599000,
            "img_link":"https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80"
        },
        {
            "id":"frntrchc3",
            "type":"couch",
            "name":"Big Size Leather Sofa",
            "description":"Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan kulit berkualitas sehingga nyaman di kulit dan tidak mudah retak",
            "currency":"Rp",
            "price":4599000,
            "img_link":"https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        },
        //...
    ],
    "message":"Data sent successfully"
}
```
#### Get Data by Type
`GET, /data/type/{type}`

List tipe produk:
- chair
- couch
- decoration
- drawer
- lamp
- shelf
- table
- vase
#### Response
example: `GET, /data/type/lamp`
```json
{
    "payload":[
        {
            "id":"frntrlmp1",
            "type":"lamp",
            "name":"Architec Lamp",
            "description":"Lampu arsitek elegan dengan desain minimalis yang cocok untuk memberikan efek ambience di sudut ruangan ataupun pada meja kerja anda",
            "currency":"Rp",
            "price":329000,
            "img_link":"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id":"frntrlmp2",
            "type":"lamp",
            "name":"Wooden Hanging Lamp",
            "description":"Lampu gantung dengan gaya geometris dan menggunakan tekstur kayu sehingga menghasilkan desain yang elegan dan tentu saja minimalis",
            "currency":"Rp",
            "price":289000,
            "img_link":"https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id":"frntrlmp3",
            "type":"lamp",
            "name":"Mini Arrchitec Lamp",
            "description":"Lampu arsitek ukuran kecil dengan desain yang elegandan minimalis, cocok untuk diletakkan pada meja kerja atau belajar anda",
            "currency":"Rp",
            "price":289000,
            "img_link":"https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ],
    "message":"Data with type 'lamp' sent successfully"
}
```
#### Get Data by Product ID
`GET, /data/product/{id}`
#### Response
example: `GET, /data/product/frntrlmp3`
```json
{
    "payload":[
        {
            "id":"frntrlmp3",
            "type":"lamp",
            "name":"Mini Arrchitec Lamp",
            "description":"Lampu arsitek ukuran kecil dengan desain yang elegandan minimalis, cocok untuk diletakkan pada meja kerja atau belajar anda",
            "currency":"Rp",
            "price":289000,
            "img_link":"https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ],
    "message":"Data with id 'frntrlmp3' sent successfully"
}
```

## Teknologi

Teknologi yang digunakan pada projek REST API ini adalah sebagai berikut:
- [node.js] - bahasa dasar untuk membangun backend
- [Express] - library dari node.js yang memudahkan pembuatan API

## Kontribusi
Jika anda ingin berkontribusi dalam project ini saya akan sangat terbuka dan berterimakasih, dan jika ada kekurangan atau masalah pada REST API ini silahkan kontak saya melalui email muhabdulazis555@gmail.com atau bisa tulis di kolom **issues** pada repo ini.

## License
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![javascript](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com)
Project ini berdiri dibawah lisensi [MIT License](https://raw.githubusercontent.com/satyawikananda/berita-indo-api/main/LICENSE?token=AH44ZFF4GHAMNS4WIL4FCC3ADZ4F6).