import { PetError } from "./errors.js";

const pets = ["motya", "rony", "klushka", "klosha"];

function handlePet(pets) {
  const pet = pets.filter((pet) => pet[0] === "x")[0];

  if (!pet) {
    throw new PetError({
      name: "Pet not found",
      message: "питомец не найден",
    });
  }

  if (pets.length > 4) {
    throw new PetError({
      name: "Too many pets",
      message: "питомцев не может быть больше 4",
    });
  }

  return pet;
}

try {
  handlePet(pets);
} catch (error) {
  if (error instanceof PetError) {
    console.error(error.prettyMessage());
  } else {
    throw error;
  }
}
