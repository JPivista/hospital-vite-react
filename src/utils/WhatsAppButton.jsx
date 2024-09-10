
const WhatsAppButton = () => {
    const phoneNumber = '9500642143'; // Replace with your phone number
    const message = 'Hello, I need help with your services'; // Optional: Default message

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 p-3 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
                alt="WhatsApp"
                className="w-10 h-10"
            />
        </a>
    );
}

export default WhatsAppButton;
