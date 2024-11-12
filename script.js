
        const storyStages = {
            start: {
                text: "Ben Tennyson is ready to embark on a new adventure. He needs to decide which alien to transform into first. Which will he choose?",
                choices: [
                    { text: "Transform into Heatblast", consequence: "heatblast" },
                    { text: "Transform into XLR8", consequence: "xlr8" },
                    { text: "Transform into Four Arms", consequence: "fourarms" }
                ],
                image: "https://via.placeholder.com/300?text=Omnitrix+Activation"
            },
            heatblast: {
                text: "You transform into Heatblast! A group of alien invaders has appeared in the city. What should you do?",
                choices: [
                    { text: "Use Fireball attack", consequence: "fireball" },
                    { text: "Use Heatvision", consequence: "heatvision" }
                ],
                image: "https://via.placeholder.com/300?text=Heatblast+Fight"
            },
            xlr8: {
                text: "You transform into XLR8! You can move faster than anyone else, but you’re facing a giant robot. What’s your move?",
                choices: [
                    { text: "Speed around the robot and dodge attacks", consequence: "dodgespeed" },
                    { text: "Charge full speed at the robot", consequence: "fullspeed" }
                ],
                image: "https://via.placeholder.com/300?text=XLR8+Speed"
            },
            fourarms: {
                text: "You transform into Four Arms! A huge alien is blocking your path. What will you do?",
                choices: [
                    { text: "Use your strength to punch through the enemy", consequence: "punchthrough" },
                    { text: "Use your agility to dodge and counterattack", consequence: "agility" }
                ],
                image: "https://via.placeholder.com/300?text=Four+Arms+Strength"
            },
            fireball: {
                text: "You unleash a powerful fireball, defeating many invaders. But now more aliens are arriving. What’s your next step?",
                choices: [
                    { text: "Use Heatvision to destroy the remaining enemies", consequence: "heatvision" },
                    { text: "Retreat and regroup with your team", consequence: "regroup" }
                ],
                image: "https://via.placeholder.com/300?text=Fireball+Attack"
            },
            heatvision: {
                text: "You use Heatvision to melt the alien invaders’ armor! However, they retaliate and strike back. What will you do?",
                choices: [
                    { text: "Use your fireball to counterattack", consequence: "fireballagain" },
                    { text: "Run and transform into another alien", consequence: "start" }
                ],
                image: "https://via.placeholder.com/300?text=Heatvision+Power"
            },
            dodgespeed: {
                text: "You use your incredible speed to dodge the robot’s attacks and sneak up on it! What will you do next?",
                choices: [
                    { text: "Destroy the robot from behind", consequence: "destroyrobot" },
                    { text: "Use your speed to find a weakness in its armor", consequence: "findweakness" }
                ],
                image: "https://via.placeholder.com/300?text=Speed+Dodge"
            },
            fullspeed: {
                text: "You charge at the robot with full speed, but you miss and get knocked back! The robot is stronger than expected.",
                choices: [
                    { text: "Transform into another alien to find a better strategy", consequence: "start" },
                    { text: "Try again with a more cautious approach", consequence: "dodgespeed" }
                ],
                image: "https://via.placeholder.com/300?text=Robot+Knocked+Back"
            },
            punchthrough: {
                text: "You use your strength to punch through the alien, but now you face multiple enemies. They’re getting stronger!",
                choices: [
                    { text: "Smash through the enemies with brute force", consequence: "bruteforce" },
                    { text: "Use your agility to avoid attacks and counter", consequence: "agility" }
                ],
                image: "https://via.placeholder.com/300?text=Victory+Smash"
            },
            agility: {
                text: "You dodge the enemies’ attacks and counter with agility, defeating them one by one. But there’s more ahead.",
                choices: [
                    { text: "Continue the fight with more agility", consequence: "end" },
                    { text: "Transform into a stronger alien", consequence: "start" }
                ],
                image: "https://via.placeholder.com/300?text=Victory+Dodge"
            },
            fireballagain: {
                text: "Your fireball attack destroys the remaining invaders, but a new challenge arises. A larger enemy approaches!",
                choices: [
                    { text: "Charge and attack with full force", consequence: "charge" },
                    { text: "Retreat and prepare for a bigger attack", consequence: "retreat" }
                ],
                image: "https://via.placeholder.com/300?text=Big+Enemy+Approaching"
            },
            destroyrobot: {
                text: "You destroy the robot with a devastating attack. The city is saved, but more danger lurks ahead!",
                choices: [
                    { text: "Celebrate the victory with your team", consequence: "end" },
                    { text: "Continue the journey for a new challenge", consequence: "start" }
                ],
                image: "https://via.placeholder.com/300?text=Robot+Destroyed"
            },
            findweakness: {
                text: "You find the robot’s weak spot and exploit it, taking it down with ease! But there’s a bigger enemy coming.",
                choices: [
                    { text: "Get ready for the final showdown", consequence: "end" },
                    { text: "Retreat and prepare for a better plan", consequence: "retreat" }
                ],
                image: "https://via.placeholder.com/300?text=Robot+Weakness"
            },
            bruteforce: {
                text: "You smash through the enemies with incredible force, but you’re getting tired! Can you continue?",
                choices: [
                    { text: "Take a break and regain your strength", consequence: "end" },
                    { text: "Push through and continue fighting", consequence: "start" }
                ],
                image: "https://via.placeholder.com/300?text=Victory+Brute+Force"
            },
            retreat: {
                text: "You decide to retreat, regroup, and come up with a better plan for the next challenge. The adventure continues.",
                choices: [
                    { text: "Return to base and rest", consequence: "end" },
                    { text: "Go for another transformation", consequence: "start" }
                ],
                image: "https://via.placeholder.com/300?text=Strategize+Plan"
            },
            end: {
                text: "You’ve completed the adventure successfully! The city is saved, and Ben is victorious. Well done!",
                choices: [
                    { text: "Start a new adventure", consequence: "start" },
                    { text: "Exit the game", consequence: "exit" }
                ],
                image: "https://via.placeholder.com/300?text=Victory+End"
            }
        };

        let currentStage = "start";

        function startGame() {
            updatePage();
            const lastModified = document.lastModified;
            document.getElementById("lastModified").textContent = lastModified;
        }

        function updatePage() {
            const stage = storyStages[currentStage];
            document.getElementById("storyText").innerText = stage.text;
            document.getElementById("adventureImage").src = stage.image;

            const choicesDiv = document.getElementById("choices");
            choicesDiv.innerHTML = "";
            stage.choices.forEach(choice => {
                const button = document.createElement("button");
                button.innerText = choice.text;
                button.onclick = () => handleChoice(choice.consequence);
                choicesDiv.appendChild(button);
            });
        }

        function handleChoice(choice) {
            if (choice === "exit") {
                alert("Thanks for playing!");
                return;
            }
            currentStage = choice;
            updatePage();
        }

        startGame();
