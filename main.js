function Classify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/S6WVyyHof/model.json", modelReady);
}

function modelReady()
{
    console.log("Your model is ready");
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);

        document.getElementById("result_1").innerHTML = "I can hear - "+ results[0].label;
        
        img1 = document.getElementById('image1')


        if(results[0].label == "Background Noise")
        {
            img1.src = 'Main Img.gif';
            console.log("Background Noise");
        }

        else if(results[0].label == "Mooing")
        {
            img1.src = 'cow.png';
            console.log("Mooing");
        }

        else if(results[0].label == "Meowing") 
        {
            img1.src = 'cat.png';
            console.log("Meowing");
        }

        else if(results[0].label == "Roar") 
        {
            img1.src = 'tiger.png';
            console.log("Roar");
        }

        else //Barking
        {
            img1.src = 'dog.png';
            console.log("Barking");
        }
    }
}