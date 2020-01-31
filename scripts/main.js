let portfolioButton = document.querySelector('#indexportfolio');

portfolioButton.onmouseover = function() {
    let mySrc = portfolioButton.getAttribute('src');
    if(mySrc === '3x/indexportfolio@3x.png') {
        portfolioButton.setAttribute ('src', '3x/indexportfolioHover@3x.png');
    }   else {
        portfolioButton.setAttribute ('src', '3x/indexportfolio@3x.png');
    }
}

portfolioButton.onmouseout = function() {
    let mySrc = portfolioButton.getAttribute('src');
    if(mySrc === '3x/indexportfolio@3x.png') {
        portfolioButton.setAttribute ('src', '3x/indexportfolioHover@3x.png');
    }   else {
        portfolioButton.setAttribute ('src', '3x/indexportfolio@3x.png');
    }
}

let aboutButton = document.querySelector('#indexaboutme');

aboutButton.onmouseover = function() {
    let mySrc2 = aboutButton.getAttribute('src');
    if(mySrc2 === '3x/indexabout@3x.png') {
        aboutButton.setAttribute ('src', '3x/indexaboutHover@3x.png');
    }   else {
        aboutButton.setAttribute ('src', '3x/indexabout@3x.png');
    }
}

aboutButton.onmouseout = function() {
    let mySrc2 = aboutButton.getAttribute('src');
    if(mySrc2 === '3x/indexabout@3x.png') {
        aboutButton.setAttribute ('src', '3x/indexaboutHover@3x.png');
    }   else {
        aboutButton.setAttribute ('src', '3x/indexabout@3x.png');
    }
}

let contactButton = document.querySelector('#indexcontact');

contactButton.onmouseover = function() {
    let mySrc3 = contactButton.getAttribute('src');
    if(mySrc3 === '3x/indexcontact@3x.png') {
        contactButton.setAttribute ('src', '3x/indexcontactHover@3x.png');
    }   else {
        contactButton.setAttribute ('src', '3x/indexcontact@3x.png')
    }
}

contactButton.onmouseout = function() {
    let mySrc3 = contactButton.getAttribute('src');
    if(mySrc3 === '3x/indexcontact@3x.png') {
        contactButton.setAttribute ('src', '3x/indexcontactHover@3x.png');
    }   else {
        contactButton.setAttribute ('src', '3x/indexcontact@3x.png')
    }
}
