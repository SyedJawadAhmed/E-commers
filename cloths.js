let cloths = document.querySelector('.men-cloths');

cloths.innerHTML = cloth.map(function (c){

    return`

    <div class="mens">
                <img src="${c.img}" alt="Digital Print Shirt">
                <div class="des">
                    <span>${c.brand}</span>
                    <h5>${c.ShirtName}</h5>
                    <div class="star">
                        <i class="bi bi-star-fill" style="color: #FFD43B;"></i>
                        <i class="bi bi-star-fill" style="color: #FFD43B;"></i>
                        <i class="bi bi-star-fill" style="color: #FFD43B;"></i>
                        <i class="bi bi-star-fill" style="color: #FFD43B;"></i>
                        <i class="bi bi-star-fill" style="color: #FFD43B;"></i>
                    </div>
                    <h4>$ ${c.Price}</h4>
                </div>
                <a href="#"><i class="bi bi-cart3 cart"></i></a>
            </div>

    `
}).join("");

