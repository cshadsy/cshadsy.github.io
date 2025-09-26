
    const themes = [
        { bg: "./res/DORFic.webp", accent: "#ff6b00" },
        { bg: "./res/liam_19.jpg", accent: "#cc0000" },
        { bg: "./res/liam_5.jpg", accent: "#0078d7" },
        { bg: "./res/liam_26.jpg", accent: "#009e60" },
        { bg: "./res/liam_28.jpg", accent: "#770092"}
    ];

    const choice = themes[Math.floor(Math.random() * themes.length)];

    document.body.style.backgroundImage = `url('${choice.bg}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    document.documentElement.style.setProperty("--accent-color", choice.accent);

