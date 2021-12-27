/*-----------FONKSİYONLAR--------------*/
// Belirli bir işlemi yapmak için tasarlanmış kod bloğudur.
// Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
//Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir.
//Mümkünse fonksiyonun dışarı bağımlılıklarını azaltmak gerekir.

/*function name(params) {            // süslü parantezler blok scope dur.
                                   //fonsiyon çağırıldığında süslü parantezin içi çalışır.
}    */                             // fonksiyonu ismini yazıp parantez açınca çalıştırmış oluyoruz. örnek name();

function sayHello(params) {
    console.log("Merhaba")            // fonksiyon ismi uniq olacak. uniq olmazsa hata verir.
}                                      //fonksiyon isimlendirmesini neyle ilgiliyse o isim verilir.
sayHello();                         //işlem sırası önemli çağırıldığı yerde çalışır.
sayHello();             // Fonksiyon çağırma (function call)

/*-----------------------FUNCTİON DECLARATİON-------------------------*/


// 3 tip fonksiyon vardır.
//1.Regular Fonksiyon:içerisinde işlem döndüren--------------------------->
let a = 5;
let b = 6;
function calc() {
    console.log(a + b)
}
calc();             

//2.Parametreli Fonksiyon------------------------------>
let name1 = "mehmet"                       // Parametreli fonksiyon 2 argümanla çalışır. Parametre ve argüman     
function nameUpper(isim) {             //parantez içinde yazılana (parametre) fonksiyona çalışması için gönderdiğimize de argüman denir.
    console.log(isim.toUpperCase())
}
nameUpper("ali");
nameUpper(name1)

function calculate(param1, param2) {
    let number = param1 * 2;
    console.log(param1 + param2)          // içerisinde tanımlanan değişkenleri fonk dışında kullanılamaz. Dışarıdan kullanılır.
    console.log(number, "2 katı")          // içerisinde tanımlanan değişkenleri fonk dışında kullanılamaz. Dışarıdan kullanılır.
}
calculate(5, 9)


// parametresiz versiyon..
let para = 7;
let para2 = 5;
function calculatee() {
    let number11 = para * 2;
    console.log(para + para2)
    console.log(number11, "2 katı")
}
calculatee()

function namer(param1, param2) {
    console.log(param1, param2)                   // ikinci parametreyi vermezsek undefined olur
}
namer("ahmet")

function naming(param1, param2 = "erkek") {                // 3. Default parametreli-------------------------> 
    console.log(`${param1} bir ${param2}`)
}
naming("emre")                                      // 2. değeri vermedik ama parametreyi default olarak tanımladık.
naming("şeyda", "kız")                               // 2. değeri verirsek ozaman onu yazdırır.


/*----------------------- 4.Return Fonksiyonları--------------------------*/


function sayName(parametre) {
    let cumle = `${parametre} benim adım`;
    return cumle;                                // Fonksiyonu çağırmak onu konsolda görmek demek değildir. console.log js kodumuzun durumunu görürürüz.
}                                            // return fonk kod bloğu içerisinde birşey dönecek ve kod bloğu içerisi içinde kullanılacak.

console.log(sayName("emre"))

function nameFunc(params) {                         // return bir fonksiyonu sonlandıran bir ifadedir.
    return params
}
console.log(nameFunc(6))

let yenideger = nameFunc(6) + 7;
console.log(yenideger)

function deneme(name, age) {
    console.log(`merhaba ${name} yaşınız ${age}`)
}
deneme("emre",33);

// örnek
function karesi(x) {            // return dediğimiz zaman fonksiyonu başka fonksiyonda kullanabiliyoruz.
    return x*x;                    // return bize fonksiyon içinden bir değer dönüyor.
}

console.log(karesi(2))

/*-------Function expression----*/

// Fonksiyonu bir değişkene atayabiliyoruz.

const yeniFunc = function (deger) {         // Arasındaki fark normal fonksiyonlarda fonksiyon ismini her yerden çağırıyoruz,
    return deger                               // bu fonksiyonda fonksiyonu tanımladıktan sonra çağırabiliyoruz.
}
yeniFunc(5)   

/*------------IIEF------------------*/
// kendi kendine çalışan fonksiyon
// Başka bir yerden çağırılmasına ihtiyaç duyulmayan hesaplamalarda kullanırız. Çok sık kullanılmaz.



// (function () {
//     console.log("merhaba");
// })(); 


// function declaration ile function expression arasındaki fark func ismi var func exp. isim yok 
// çalıştırması tasarımı herşeyi aynı bir tek isim konusunda farklı.
//exp. da 
function name(params) {
    
}

//örnek
let firstName = "emre";
let age = 25;

function example(value1, value2) {
    let firstYear =2*10.5;
    let lastYear = (value2 -2)*4;
    let totalYears = firstYear+lastYear;

    console.log(`Senin adın ${value1} köpek yaşın ${totalYears}`)

}
example(firstName,age)