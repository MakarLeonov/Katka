interface Platform {
    id: number;
    title: string;
}

interface Review {
    id: number;
    author: string;
    rating: number;
    male: string;
    comment: string;
    isPublished: number;
}

interface Game {
    id: number;
    name: string;
    author: string;
    genre: string;
    image: string;
    price: number;
    currency: "USD" | "RUB";
    // currency: "$" | "";
    memory: string;
    description: string;
    platforms: string[];
}