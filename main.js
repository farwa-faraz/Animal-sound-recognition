function Classify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/U7EPU-xaz/model.json", modelReady);
}

function modelReady()
{
    console.log("Your model is ready");
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);

        document.getElementById("result_1").innerHTML = "I can hear - "+ results[0].label;
        
    }
}