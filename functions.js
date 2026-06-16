document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto")
        ) return;

        e.preventDefault();

        const fade = document.querySelector(".page-fade");
        if (fade) fade.style.opacity = "1";

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });

    const current = window.location.pathname.split("/").pop();

    document.querySelectorAll(".links a").forEach(a => {
        if (a.getAttribute("href") === current) {
            a.classList.add("active");
        }
    });

    setTimeout(() => {
        document.querySelectorAll(".reveal-group").forEach(el => {
            el.classList.add("show");
        });
    }, 2600);

    const discordCard = document.getElementById("discord-card");

    if (discordCard) {
        discordCard.addEventListener("click", async (e) => {
            e.preventDefault();

            try {
                await navigator.clipboard.writeText("@real_arkozy");

                const text = discordCard.querySelector("span");
                const original = text.textContent;

                text.textContent = "Copied!";

                setTimeout(() => {
                    text.textContent = original;
                }, 1500);

            } catch (err) {
                console.error("Failed to copy:", err);
            }
        });
    }

});