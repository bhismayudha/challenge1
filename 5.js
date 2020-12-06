class Lingkaran {
    constructor(r){
        this.jarijari = r
    }
  
    luas = () => {
        return 22/7 (this.jarijari * this.jarijari)
    }
    keliling = () => {
        return 2 * 22/7 * this.jarijari
    }
  }
  
  class Tabung extends Lingkaran{
    constructor(r, t){
    super(r)
    this.tinggi = t
    }
    volume = () => {
        return 22/7 * (this.jarijari * this.jarijari) * this.tinggi
    }
    luasPermukaan = () => {
        return 22/7 * this.jarijari * (this.jarijari * 2 * this.tinggi)
    }
    luasSelimut = () => {
        return 2 * 22/7 * this.jarijari * this.tinggi
    }
  }
  
  class Kerucut extends Lingkaran {
    constructor(r, t){
        super(r)
        this.tinggi = t
    }
    
    volume = () => {
        return 1/3 * 22/7 * (this.jarijari * this.jarijari) * this.tinggi
    }
    luasPermukaan = () => {
        return 22/7 * this.jarijari * (this.jarijari + (Math.sqrt((this.jarijari * this.jarijari) + (this.tinggi * this.jarijari))))
    }
    luasSelimut = () => {
        return 22/7 * this.jarijari * (Math.sqrt((this.jarijari * this.jarijari) + (this.tinggi * this.jarijari)))
    }
  }
  
  class Bola extends Lingkaran{
    constructor(r){
        super(r)
    }
    volume = () => {
        return 4/3 * 22/7 * (this.jarijari * this.jarijari * this.jarijari)
    }
    luasPermukaan = () => {
        return 4 * 22/7 * (this.jarijari * this.jarijari)
    }
  }
  
  let gelas = new Tabung(7.5, 3.14, 50)
  console.log ("Volume gelas = " + gelas.volume() + " cm3");
  console.log ("Luas permukaan gelas = " + gelas.luasPermukaan() + " cm2");
  console.log ("Luas selimut gelas = " + gelas.luasSelimut() + " cm2");
  console.log ("-----------------------");
  
  let traffic_cone = new Kerucut (10,3.14,40)
  console.log ("Volume traffic cone = " + traffic_cone.volume() + " cm3");
  console.log ("Luas permukaan traffic cone = " + traffic_cone.luasPermukaan() + " cm2");
  console.log ("Luas selimut = " + traffic_cone.luasSelimut() + " cm2");
  console.log ("-----------------------");
  
  let bola = new Bola (15, 3.14)
  console.log ("Volume bola = " + bola.volume() + " cm3");
  console.log ("Luas permukaan bola = " + bola.luasPermukaan() + " cm2");
  console.log ("-----------------------");