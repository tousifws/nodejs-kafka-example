export function getRandomAnimal() {
    const categories = ["CAT", "DOG"];
    return categories[Math.floor(Math.random() * categories.length)];
}

export function getRandomNoise(animal) {
    if (animal === "CAT") {
        const noises = ["meow", "purr"];
        return noises[Math.floor(Math.random() * noises.length)];
    } else if (animal === "DOG") {
        const noises = ["bark", "woof"];
        return noises[Math.floor(Math.random() * noises.length)];
    } else {
        return "silence..";
    }
}

export function getRandomLanguage() {
    const languages = ["JS", "TS", "Dart", "Kotlin", "Rust", "Go", "Cpp"];
    return languages[Math.floor(Math.random() * languages.length)];
}

export function getRandomFrameworkOrLibrary(lang) {
    switch (lang) {
        case "JS":
            return "React";
        case "TS":
            return "TypeGraphQL";
        case "Dart":
            return "Flutter";
        case "Kotlin":
            return "Ktor";
        case "Go":
            return "Fiber";
        case "Rust":
            return "Actix";
        case "Cpp":
            return "Boost";
        default:
            return "";
    }
}
