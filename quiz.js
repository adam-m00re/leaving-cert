(function() 
 {
  var allQuestions = [{
    question: "Which of the following is an example of climate?",
    options: ["An intense thunderstorm in Houston", "The average temperature in Chicago over the past 50 years", "A hot day in Boston in the fall", "A foggy day in San Francisco"],
    answer: 2
  }, {
    question: "How are warming ocean temperatures impacting whales, fish and other marine mammals?",
    options: ["They aren’t as hungry because it’s so hot", "Warmer water makes them sleepy", "Their migratory patterns are changing", "Summer seems longer so fish are schooling less"],
    answer: 3
  }, {
    question: "How can extreme events like hurricanes, drought and wildfires impact energy infrastructure?",
    options: ["Water shortages", "Power outages", "Higher electricity & gas prices","All answer choices are accurate"],
    answer: 4
  },{
    question: "Of the following, the most impactful action you can take to reduce your carbon footprint is:",
    options: ["Turn off your lights more often", "Drive a hybrid car", "Eat a plant-based diet", "Hang your clothes to dry"],
    answer: 0
  }, {
    question: "Why are forests important for mitigating climate change?",
    options: ["Forests serve as a sink in the carbon cycle", "Trees provide building materials", "Trees are an important food source", "Leaves of trees reflect all sunlight away from the Earth"],
    answer: 1
  },{
    question: "How is climate change altering precipitation in the U.S.?",
    options: ["Increasing extreme precipitation everywhere", "Increasing length of droughts everywhere", "Increase in both wet and dry extremes", "Climate change doesn’t alter precipitation"],
    answer: 0
  },{
    question: "Cities & rural communities face some of the same climate issues; these include:",
    options: ["Too many people with the same name slows emergency response", "There are not enough celebrities focused on climate issues", "The need to upgrade aging infrastructure", "People can’t identify the needed solutions so take no action"],
    answer: 0
  },{
    question: "How do climate factors (temperature, precipitation, & humidity) relate to vector-borne disease?",
    options: ["Heavy rain increases the risk of animals transmitting rabies", "Milder winters increase the tick density & risk of lyme", "Dry summers & drought increase the risk of West Nile virus", "Snow storms increase mosquito density & risk of malaria"],
    answer: 3
  },{
    question: "An important example of a “positive feedback loop” in the polar climate system is:",
    options: ["Scientists in remote places check on each others instruments", "Warming ocean water opens new areas for marine species", "Warmer winters cause more plant growth, providing more food", "Sea ice melt opens more ocean to sunlight, causing more melt"],
    answer: 2
  },{
    question: "Did you enjoy the quiz",
    options: ["Yes", "No", "", ""],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();