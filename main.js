$(document).ready(function (){
    $("div#container").hide();  
    $("input[name=sh]").on("click", function () {  
        var selectedValue = $("input[name=sh]:checked").val();  
        if (selectedValue == "show") {  
            $("div#container").fadeIn();
            $(":radio, label").hide(); 
            $(".question").hide();
        }  
        else {  
            if (selectedValue == "no") {  
                $("div#container").hide();
                alert("Thanks!! Please don't come again");
                $(":radio, label").hide(); 
                $(".question").hide();
                $(".refresh").show();
            }  
        }  

    }); 


    $.get("https://rickandmortyapi.com/api/character/?name=rick", function(ricks){
        console.log("gg",ricks.results);
        var num = Math.floor(Math.random() * 20);
            $("#rick").append(`
            <img src="${ricks.results[num].image}" alt="${ricks.results[num].name}">
            <h1>Hello</h1>
            <h2>${ricks.results[num].name}
            `);
        }, "json");


    $(".getMorty").click(function(){
        var num = Math.floor(Math.random() * 20);
        $.get("https://rickandmortyapi.com/api/character/?name=morty", function(mortys){
        $("#morty").append(`
            <img src="${mortys.results[num].image}" alt="${mortys.results[num].name}">
            <h1>Say hello to your new Rick</h1>
            <h2>${mortys.results[num].name}</h2>
            `);
        }, "json");
        $(".getMorty").hide();
        $("#new").show();
        $("#morty").fadeIn();
    })

    $("#new").click(function(){
        var num = Math.floor(Math.random() * 20);
        $.get("https://rickandmortyapi.com/api/character/?name=morty", function(mortys){
            $("#morty").html("");
        $("#morty").append(`
            <img src="${mortys.results[num].image}" alt="${mortys.results[num].image}">
            <h1>Say hello to your new Rick</h1>
            <h2>${mortys.results[num].name}</h2>
            `);
        }, "json");

    });

    $("#new").click(function(){
        var clicks="";
        var button=document.getElementById("new");
        button.addEventListener("click", function(){
            clicks++;
            if (clicks==2){
                $("#new").hide();
                alert("I don't have all day. Take this Morty and go");
                $(".refresh").show();
            }
        })
        console.log(clicks);
        
    })

    $(".refresh").click(function(){
        window.location.reload();
    });


})