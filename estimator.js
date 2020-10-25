//pricing


//slider vars
var pageSlider = document.getElementById("pages");
var productsSlider = document.getElementById("products");
var pageOutput = document.getElementById("page-out");
var productsOutput = document.getElementById("products-out");

//vars and pricing
var total = 0; //calculated at the end of the program
var total2 = 0;//the total for a monthly plan
var upfrontCost = 0;
var monthlyCost = 0;
var estimationDetails = "";

var pages = {units:1, price:187};
var content = {units:0, price:75};
var blog = {units:0, price:400};
var legal = {units:0, price:500};
var membership = {units:0, price:875};
var store = {units:0, price:625};
var productsBtn = {units:0};
var products = {units:0, price:15};
var logo = {units:0, price:150};
var analytics = {units:0, price:125};
var domain = {units:0, price:20};
var chat = {units:0, price:125};
var signup = {units:0, price:75};

document.getElementById("continue-1").onclick = function()
{
  document.getElementById("selection-1").classList.add('hidden');
  window.setTimeout(function(){$("#selection-1").addClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-2").removeClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-2").removeClass("hidden");}, 750);
}

document.getElementById("back-1").onclick = function()
{
  document.getElementById("selection-2").classList.add('hidden');
  window.setTimeout(function(){$("#selection-2").addClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-1").removeClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-1").removeClass("hidden");}, 750);
}

document.getElementById("continue-2").onclick = function()
{
  document.getElementById("selection-2").classList.add('hidden');
  window.setTimeout(function(){$("#selection-2").addClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-3").removeClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-3").removeClass("hidden");}, 750);
}

document.getElementById("back-2").onclick = function()
{
  document.getElementById("selection-3").classList.add('hidden');
  window.setTimeout(function(){$("#selection-3").addClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-2").removeClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-2").removeClass("hidden");}, 750);
}

document.getElementById("continue-3").onclick = function()
{
	document.getElementById("title").classList.add('hidden');
	document.getElementById("selection-3").classList.add('hidden');
    window.setTimeout(function(){$("#selection-3").addClass("display-none");}, 500);
    window.setTimeout(function(){$("#selection-4").removeClass("display-none");}, 500);
    window.setTimeout(function(){$("#selection-4").removeClass("hidden");}, 750);
	//math to calculate total
	total = 0;
	total += (pages.units * pages.price);
	total += (content.units * content.price * pages.units);
	total += (blog.units * blog.price);
	total += (legal.units * legal.price);
	total += (membership.units * membership.price);
	total += (store.units * store.price);
	total += (products.units * products.price);
	total += (logo.units * logo.price);
	total += (analytics.units * analytics.price);
	total += (domain.units * domain.price);
	total += (chat.units * chat.price);
	total += (signup.units * signup.price);

	/*
	
	calculate monthly cost if client desires monthly payments
	payment brackets
	A) 0-1200
	B) >1200-3000
	C) >3000
	
	Total Project cost increses by 15% (calculated before upfront cost and monthly cost is calculated)
	
	brackets overlap similar to tax payment
	
	A) 25% Upfront
	B) 15% Upfront
	C) 10% Upfront
	
	First Monthly Payment due 1 month after going live, 12 month contract
	Balance of project divided by 12 monthly payments
	
	*/
	
	total2 = (total*1.15) //added 15%
	
	if (total2 <= 1200)
	{
		upfrontCost = total2*0.25
		monthlyCost = (total2-upfrontCost)/12
	}
	else if (total2 > 1200 && total2 <= 3000)
	{
		upfrontCost = (1200*0.25)+((total2-1200)*0.15)
		monthlyCost = (total2-upfrontCost)/12
	}
	else if (total2 > 3000)
	{
		upfrontCost = (1200*0.25)+((1800)*0.15)+((total2-3000)*0.10)
		monthlyCost = (total2-upfrontCost)/12
	}

	document.getElementById("estimation-total").innerHTML = numberWithCommas(total);
	document.getElementById("upfront-cost").innerHTML = numberWithCommas(Math.round(upfrontCost));
	document.getElementById("monthly-cost").innerHTML = numberWithCommas(Math.round(monthlyCost));
	
	//now add the estimation details to the email form
	// a \\\n = new line
	estimationDetails = "New Website Development Estimation\n" +
	"Project Cost: £" + String(total) + "\n" +
	"\n"+
	"Number of pages: " + String(pages.units) + "\n";
	
	if (content.units === 1)
	{
		estimationDetails += "Content Writing: Yes\n";
	}
	else
	{
		estimationDetails += "Content Writing: No\n";
	}
	
	if (blog.units === 1)
	{
		estimationDetails += "Blog: Yes\n";
	}
	else
	{
		estimationDetails += "Blog: No\n";
	}
	
	if (legal.units === 1)
	{
		estimationDetails += "Legal Pages: Yes\n";
	}
	else
	{
		estimationDetails += "Legal Pages: No\n";
	}
	
	if (membership.units === 1)
	{
		estimationDetails += "Membership Site: Yes\n";
	}
	else
	{
		estimationDetails += "Membership Site: No\n";
	}
	
	if (store.units === 1)
	{
		estimationDetails += "Online Store: Yes\n";
	}
	else
	{
		estimationDetails += "Online Store: No\n";
	}
	
	if (products.units != 0)
	{
		estimationDetails += "Product Uploads: " + String(products.units) + "\n";
	}
	
	if (logo.units === 1)
	{
		estimationDetails += "Logo Design: Yes\n";
	}
	else
	{
		estimationDetails += "Logo Design: No\n";
	}
	
	if (analytics.units === 1)
	{
		estimationDetails += "Analytics and Search Console: Yes\n";
	}
	else
	{
		estimationDetails += "Analytics and Search Console: No\n";
	}
	
	if (domain.units === 1)
	{
		estimationDetails += "Domain Registration: Yes\n";
	}
	else
	{
		estimationDetails += "Domain Registration: No\n";
	}
	
	if (chat.units === 1)
	{
		estimationDetails += "Live Chat Function: Yes\n";
	}
	else
	{
		estimationDetails += "Live Chat Function: No\n";
	}
	
	if (signup.units === 1)
	{
		estimationDetails += "Email Signup Form: Yes\n";
	}
	else
	{
		estimationDetails += "Email Signup Form: No\n";
	}

	document.getElementById("estimation").value = estimationDetails;
	
}

document.getElementById("back-3").onclick = function()
{
  document.getElementById("title").classList.remove('hidden');
  document.getElementById("selection-4").classList.add('hidden');
  window.setTimeout(function(){$("#selection-4").addClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-3").removeClass("display-none");}, 500);
  window.setTimeout(function(){$("#selection-3").removeClass("hidden");}, 750);
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "£" + parts.join(".");
}

pageSlider.oninput = function() {
	pages.units = Number(this.value);
	if (this.value === "1")
  {
  	pageOutput.innerHTML = this.value + " Page";
  }
  else
  {
  	pageOutput.innerHTML = this.value + " Pages";
  }
}

productsSlider.oninput = function() {
	products.units = Number(this.value);
	if (this.value === "1")
  {
  	productsOutput.innerHTML = this.value + " Product";
  }
  else
  {
  	productsOutput.innerHTML = this.value + " Products";
  }
}


//the buttons

document.getElementById("content").onclick = function()
{
	if (content.units === 0)
  {
  	content.units = 1;
    document.getElementById("content").innerHTML = "✓";
    document.getElementById("content").classList.add('selected');
  }
  else
  {
  	content.units = 0;
    document.getElementById("content").innerHTML = "✗";
    document.getElementById("content").classList.remove('selected');
	}
};

document.getElementById("blog").onclick = function()
{
	if (blog.units === 0)
  {
  	blog.units = 1;
    document.getElementById("blog").innerHTML = "✓";
    document.getElementById("blog").classList.add('selected');
  }
  else
  {
  	blog.units = 0;
    document.getElementById("blog").innerHTML = "✗";
    document.getElementById("blog").classList.remove('selected');
	}
};

document.getElementById("legal").onclick = function()
{
	if (legal.units === 0)
  {
  	legal.units = 1;
    document.getElementById("legal").innerHTML = "✓";
    document.getElementById("legal").classList.add('selected');
  }
  else
  {
  	legal.units = 0;
    document.getElementById("legal").innerHTML = "✗";
    document.getElementById("legal").classList.remove('selected');
	}
};

document.getElementById("membership").onclick = function()
{
	if (membership.units === 0)
  {
  	membership.units = 1;
    document.getElementById("membership").innerHTML = "✓";
    document.getElementById("membership").classList.add('selected');
  }
  else
  {
  	membership.units = 0;
    document.getElementById("membership").innerHTML = "✗";
    document.getElementById("membership").classList.remove('selected');
	}
};

document.getElementById("store").onclick = function()
{
	if (store.units === 0)
  {
  	store.units = 1;
    document.getElementById("store").innerHTML = "✓";
    document.getElementById("store").classList.add('selected');
	
	window.setTimeout(function(){$("#store-option-1").removeClass("display-none");});
    window.setTimeout(function(){$("#store-option-1").removeClass("hidden");},500);
  }
  else
  {
  	store.units = 0;
    document.getElementById("store").innerHTML = "✗";
    document.getElementById("store").classList.remove('selected');
	
	document.getElementById("productsBtn").innerHTML = "✗";
    document.getElementById("productsBtn").classList.remove('selected');
	
    window.setTimeout(function(){$("#store-option-1").addClass("hidden");});
	window.setTimeout(function(){$("#store-option-1").addClass("display-none");}, 500);
	if (productsBtn.units === 1)
	{
		//set the products to 0 and close the slider
		window.setTimeout(function(){$("#store-option-2").addClass("hidden");});
		window.setTimeout(function(){$("#store-option-2").addClass("display-none");}, 500);
		products.units = 0;
		document.getElementById("products-out").innerHTML = "0 Products";
	}
	productsBtn.units = 0;
  }
};

document.getElementById("productsBtn").onclick = function()
{
	if (productsBtn.units === 0)
  {
  	productsBtn.units = 1;
    document.getElementById("productsBtn").innerHTML = "✓";
    document.getElementById("productsBtn").classList.add('selected');
	
	window.setTimeout(function(){$("#store-option-2").removeClass("display-none");});
    window.setTimeout(function(){$("#store-option-2").removeClass("hidden");},500);
  }
  else
  {
  	productsBtn.units = 0;
    document.getElementById("productsBtn").innerHTML = "✗";
    document.getElementById("productsBtn").classList.remove('selected');
	
	window.setTimeout(function(){$("#store-option-2").addClass("hidden");});
	window.setTimeout(function(){$("#store-option-2").addClass("display-none");}, 500);
	products.units = 0;
	document.getElementById("products-out").innerHTML = "0 Products";
  }
};

document.getElementById("logo").onclick = function()
{
	if (logo.units === 0)
  {
  	logo.units = 1;
    document.getElementById("logo").innerHTML = "✓";
    document.getElementById("logo").classList.add('selected');
  }
  else
  {
  	logo.units = 0;
    document.getElementById("logo").innerHTML = "✗";
    document.getElementById("logo").classList.remove('selected');
	}
};

document.getElementById("analytics").onclick = function()
{
	if (analytics.units === 0)
  {
  	analytics.units = 1;
    document.getElementById("analytics").innerHTML = "✓";
    document.getElementById("analytics").classList.add('selected');
  }
  else
  {
  	analytics.units = 0;
    document.getElementById("analytics").innerHTML = "✗";
    document.getElementById("analytics").classList.remove('selected');
	}
};

document.getElementById("domain").onclick = function()
{
	if (domain.units === 0)
  {
  	domain.units = 1;
    document.getElementById("domain").innerHTML = "✓";
    document.getElementById("domain").classList.add('selected');
  }
  else
  {
  	domain.units = 0;
    document.getElementById("domain").innerHTML = "✗";
    document.getElementById("domain").classList.remove('selected');
	}
};

document.getElementById("chat").onclick = function()
{
	if (chat.units === 0)
  {
  	chat.units = 1;
    document.getElementById("chat").innerHTML = "✓";
    document.getElementById("chat").classList.add('selected');
  }
  else
  {
  	chat.units = 0;
    document.getElementById("chat").innerHTML = "✗";
    document.getElementById("chat").classList.remove('selected');
	}
};

document.getElementById("signup").onclick = function()
{
	if (signup.units === 0)
  {
  	signup.units = 1;
    document.getElementById("signup").innerHTML = "✓";
    document.getElementById("signup").classList.add('selected');
  }
  else
  {
  	signup.units = 0;
    document.getElementById("signup").innerHTML = "✗";
    document.getElementById("signup").classList.remove('selected');
	}
};
