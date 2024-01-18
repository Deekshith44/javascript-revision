/*
const products=[{
    title:'A Formal Pant',
    imageUrl:'./Images/pant.jpg',
    price:1200.00,
    description:'Plane good looking pant'

},
{
    title:'A Jenes Pant',
    imageUrl:'./Images/jenespant.jpg',
    price:2000.00,
    description:'Stylish Jenes pant'

},
{
    title:'A Jenes Shorts',
    imageUrl:'./Images/short.jpg',
    price:200.00,
    description:'Good looking Shorts'

}

];

Storing all the dats as objects
*/

/*

//Method 1 just using only object

const productList={
    products: [
        {
        title:'A T-Shirt',
        imageUrl:'https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
        price:28.50,
        description:'Good looking T-shirt'
    
    },
    {
        title:'A Shoe',
        imageUrl:'https://rukminim2.flixcart.com/image/850/1000/jasj6a80/shoe/f/y/c/sports-thrilling-casuals-10-hd-grey-original-imafy64u6sqzq4dm.jpeg?q=90&crop=false',
        price:200.00,
        description:'Stylish Show'
    
    },
    {
        title:'A Bag',
        imageUrl:'https://www.tanotis.com/cdn/shop/products/1340980598000_874536_800x.jpg?v=1575980625',
        price:110.00,
        description:'Nice College Bag'
    
    }
    
    ],

    render(){
        const renderHook=document.getElementById('app');
        const prodList=document.createElement('ul');
        prodList.className="product-list";
        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className="product-item";
            prodEl.innerHTML=`
            <div>
            <img src="${prod.imageUrl}" alt=${prod.title}>
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</P>
            <button>Add To cart</button>
            </div>
            </div>
            `;

            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();
*/

/*
//Creating class

class Product
{
    //These are called class fields
    // title="DEFAULT";
    // imageUrl;
    // price;
    // description;

    //No need of wrinting these call field as we rewrite that in propert to add a value

    constructor(tit,img,price,desc)
    {
        //these are called class property
        this.title=tit;
        this.imageUrl=img;
        this.price=price;
        this.description=desc;
       
    }
}


const productList={
    products:[
     new Product('A T-Shirt',
                 'https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
                 '28.50',
                 'Good looking T-shirt'
                ),

    new Product('A Shoe',
                'https://rukminim2.flixcart.com/image/850/1000/jasj6a80/shoe/f/y/c/sports-thrilling-casuals-10-hd-grey-original-imafy64u6sqzq4dm.jpeg?q=90&crop=false',
                '200.00',
                'Stylish Shoe'
               ) ,

    new Product('A Bag',
                'https://www.tanotis.com/cdn/shop/products/1340980598000_874536_800x.jpg?v=1575980625',
                '110.00',
                'Nice College Bag'
    )
    ],

    render() {
    const renderHook=document.getElementById('app');
    const prodList=document.createElement('ul');
    prodList.className="product-list";
    for(const prod of this.products){
        const prodEl=document.createElement('li');
        prodEl.className="product-item";
        prodEl.innerHTML=`
        <div>
        <img src="${prod.imageUrl}" alt=${prod.title}>
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</P>
        <button>Add To cart</button>
        </div>
        </div>
        `;
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
    }
};

productList.render();

*/


/*
// Using and connecting Multiple classes

class Product
{
    //These are called class fields
    // title="DEFAULT";
    // imageUrl;
    // price;
    // description;

   
    constructor(tit,img,price,desc)
    {
        //these are called class property
        this.title=tit;
        this.imageUrl=img;
        this.price=price;
        this.description=desc;
       
    }
}


//2nd class for rendering 
class ProductItem {
    constructor(product){
        this.product=product;
    }
    render(){
    const prodEl=document.createElement('li');
    prodEl.className="product-item";
    prodEl.innerHTML=`
    <div>
    <img src="${this.product.imageUrl}" alt=${this.product.title}>
    <div class="product-item__content">
    <h2>${this.product.title}</h2>
    <h3>\$${this.product.price}</h3>
    <p>${this.product.description}</P>
    <button>Add To cart</button>
    </div>
    </div>
    `;
    return prodEl;   
    }
   
}



//3rd class for data
class ProductList {
    products=[
     new Product('A T-Shirt',
                 'https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
                 '28.50',
                 'Good looking T-shirt'
                ),

    new Product('A Shoe',
                'https://rukminim2.flixcart.com/image/850/1000/jasj6a80/shoe/f/y/c/sports-thrilling-casuals-10-hd-grey-original-imafy64u6sqzq4dm.jpeg?q=90&crop=false',
                '200.00',
                'Stylish Shoe'
               ) ,

    new Product('A Bag',
                'https://www.tanotis.com/cdn/shop/products/1340980598000_874536_800x.jpg?v=1575980625',
                '110.00',
                'Nice College Bag'
    )
    ]

  constructor(){}



    render() {
    const renderHook=document.getElementById('app');
    const prodList=document.createElement('ul');
    prodList.className="product-list";
    for(const prod of this.products){
        const productItem=new ProductItem(prod);
        const prodEl=productItem.render();
              
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
    }
};
const productList=new ProductList();
productList.render();
*/


//Inheritance

class Students{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.myclass=cls;
    }
    //method
    biodata(){
        /*console.log(`Hi my self ${this.myname}, and my age id ${this.myage}
        and class is ${this.myclass}`); */
       return  `Hi my self ${this.myname}, and my age id ${this.myage}
        and class is ${this.myclass}`;
    }
}

//class inheritance

class Player extends Students
{
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.mygame=game;
    }
    player_biodata(){
        return `${super.biodata()} and I am a ${this.mygame} player`;
    }
}


//const student=new Students('Deekshith','22','BCA');
const player = new Player('Deekshith','22','BCA','Football');
//student.biodata();

console.log(player.player_biodata());  //we are returning the value so console.log







