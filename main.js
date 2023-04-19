let products = [
    {
        name: "Banana",
        description: "A yellow banana. Some say it's a berry.",
        price: 9
    },
    {
        name: "Apple",
        description: "A red apple, sweet and tasty.",
        price: 7
    },
    {
        name: "Orange",
        description: "An orange. It's orange.",
        price: 10
    }
];

// Display all products
function showProducts() {
    let html = '';
    // Loop over products
    for(let product of products) {
        html += `
            <div class="product">
                <h2>${product.name}</h2>
                <div class="info">
                    <p>${product.description}</p>
                    <p>Pris: <b>${product.price}</b></p>
                </div>
                <button class="remove" data-product-name="${product.name}">Remove</button>
                <hr>
            </div>
        `;
    }
    // Add html to the document, products div
    document.querySelector('.products').innerHTML = html;
}

// handle all click events
function handleEvent(){
    // Add event listener to entir body and listen for click
    document.querySelector('body').addEventListener('click',function (event){
        // get hte closest product- class to where we clicked
    
     
        let productClicked = evennt.target.closest('product');
        //if you clicked somewhwer unrelated, we just return
        if(!productClicked){return;}
        
        //Get the info from the clicked producg
        let infoProduct = productClicked.querySelector('info');
        //ternary operator, if block - go none, if none - go block
        infoProduct.style.display = infoProduct.style.display ==='block'?'none':'block';
    
        
        // if the closest element is the remove button
        let removeButton= event.target.closest('.remove');
        if(removeButton){
        
        
        //get the attribute data-product-name
        let productname=removeButton.getAttribute('data-product-name');
        //remove product by name from aaray, using filter
        products= products.filter((product) => produc.name !== productName);
        productClicked.remove();
        }
    });

        // Event listener for 

        let addProductForm = document.querySelector('#add-product-form');
        addProductForm.addEventListener('submit',function(event){
            // don't let the site reloaded when submit is clicked
            event.preventDefault();
            // Get the values form the form
            let name = document.querySelector('#name').value;
            let description = document.querySelector('#description').value;
            let price = Number(document.querySelector('#price').value)
            //erroe handling
            if (name&& description&&price){
                //let new product
                let newProduct= {
                    name: name,
                    description:description,
                    price:price
                };
                //Add the product to the product array
                product.push(newProduct);

                // reset th form and show new div
                let productsdiv = document.querySelector('.product');
                productsdiv.innerHTML='';
                // Reminder the 
                showProducts();
                console.log(products);// for debugging
                // Reset form
                addProductForm.requestFullscreen.reset();

            } else {
                alert('please fill in all fields');

            }
;
         })



}
showProducts();
handleEvent();