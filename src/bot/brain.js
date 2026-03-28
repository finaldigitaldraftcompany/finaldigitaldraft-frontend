export function getBotResponse(input, navigate) {
    const lower = input.toLowerCase();

    // ✅ Greetings
    if (
        lower.includes("hello") ||
        lower.includes("hi") ||
        lower.includes("hey") ||
        lower.includes("sup")
    ) {
        return "Hey there! How can I help you today?";
    }

    // ✅ Services inquiry
    if (
        lower.includes("what services") ||
        lower.includes("what do you offer") ||
        lower.includes("what can i do") ||
        lower.includes("what can i get") ||
        lower.includes("what do you do") ||
        lower.includes("services?")
    ) {
        return "Final Digital Draft offers clients all sorts of packages, whether you're looking to build a website, advertise your business or brand, we do it all! What are you looking for today?";
    }

    // ✅ Navigation
    if (lower.includes("home")) {
        navigate("/");
        return "Taking you to the homepage!";
    }

    if (lower.includes("services page")) {
        navigate("/services");
        return "Heading to the Services page!";
    }

    // ✅ Orders
    if (lower.includes("order") || lower.includes("request")) {
        return "To request a project, head to the Services page and choose what you need!";
    }

    // ✅ Contact
    if (lower.includes("contact")) {
        return "You can reach us through the Contact page. Want me to take you there?";
    }

    // ✅ Pricing
    if (
        lower.includes("price") ||
        lower.includes("pricing") ||
        lower.includes("cost") ||
        lower.includes("how much")
    ) {
        return "Our pricing depends on the project type and complexity. Websites, branding, and digital packages vary — what kind of project are you interested in?";
    }

    // ✅ Turnaround Time
    if (
        lower.includes("how long") ||
        lower.includes("turnaround") ||
        lower.includes("when can you finish") ||
        lower.includes("when will my project be done") ||
        lower.includes("when will my project be completed")
    ) {
        return "Turnaround time depends on the project size. Small projects can be done quickly, while full websites may take longer.";
    }

    // ✅ Support / Help
    if (
        lower.includes("help") ||
        lower.includes("assist") ||
        lower.includes("support")
    ) {
        return "I'm here to help! Tell me what you're trying to do and I'll guide you.";
    }

    // ✅ Fallback — if nothing else matches
    return "I'm not sure yet, I'm learning more everyday!";
}