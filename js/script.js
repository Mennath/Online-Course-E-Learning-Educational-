  const menuBtn = document.getElementById("menuBtn");
        const menu = document.getElementById("menu");

        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("show");
        });

        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {

            const question = item.querySelector(".faq-question");
            const button = item.querySelector(".faq-icon");

            question.addEventListener("click", () => {

                const isActive = item.classList.contains("active");

                // Close all
                faqItems.forEach(faq => {
                    faq.classList.remove("active");
                    faq.querySelector(".faq-icon").textContent = "+";
                });

                // Open clicked item
                if (!isActive) {
                    item.classList.add("active");
                    button.textContent = "×";
                }

            });

        });