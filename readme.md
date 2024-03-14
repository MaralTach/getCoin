#! env dosyalarinda genelde tum uygulama icerisinde tekrar tekrar kullanilacak degiskenler (API sifreleri, URL'ler vb. ) saklanilir. Dolayisiyla bir kere tanimlayip tum proje icersinde erisebilmek tekrari azaltmak adina avantaj saglar.

#! .env degiskenlerine her asamada (dev,prod,test) erisilebilir. Bu dosya github'a pushlandigi icin gizli bilgiler paylasmak dogru olmaz.

#? VITE de guvenlik nedeniyle degisken isimlerinin basina VITE_ kelimesi eklenmelidir.

#* bir env degiskenini okumak icin import.meta.env.degiskenAdi seklinde erisim yapilir.


.env.local    (githuba gonderlimez)


api:=coinranking5a05bc8cdb3f64622cad1564fc7b2c7c3042b2f79ca0b550