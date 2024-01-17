// const products=[{
//     title:'A Formal Pant',
//     imageUrl:'./Images/pant.jpg',
//     price:1200.00,
//     description:'Plane good looking pant'

// },
// {
//     title:'A Jenes Pant',
//     imageUrl:'./Images/jenespant.jpg',
//     price:2000.00,
//     description:'Stylish Jenes pant'

// },
// {
//     title:'A Jenes Shorts',
//     imageUrl:'./Images/short.jpg',
//     price:200.00,
//     description:'Good looking Shorts'

// }

// ];

//Storing all the dats as objects

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



