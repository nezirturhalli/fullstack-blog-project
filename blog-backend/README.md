# Logs
 - Private Logger logger =  LoggerFactory.getLogger(this.getClass()); yerine  @Slf4j annotation'ı kullanırız.
 - Loglama async olmalı. Async olmazsa uygulama performansı loglama için kaybedilir olacak. (büyük maaliyet)
   Async derken requesti bloklamadan arka planda çalışsın demek istiyoruz.
 - Loglamada -> printStackTrace ve System.out.println() kullanılmamalı -> log formatını bozuyor, formata aykırı.
 - Sensitive data olmamalıdır. -> müşteri bilgisi, kullanıcıId, password vs içermemeli (veri güvenliği ihlal edilmemeli)
 - Tüm loglar merkezi bir yerde ve belirli bir formatta toplanmalı(hepsi json, hepsi xml olmalı gibi) takip açısından avantaj sağlar
 - Level'ler dikkatli kullanılmalı.
 - Farklı level'ler için farklı appendar(handler)lar kullanılabilir
 - Tüm loglar merkezi yere toplandıktan sonra bellirli leveldeki loglar için işlem yapmak isteyebiliriz bu durumda işimizi kolaylaştırır.