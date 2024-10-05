"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { dataMovies } from "./NormalMovie.data";
import { toast } from "@/hooks/use-toast";

export function NormalMovie() {
  const [isLoading, setIsLoading] = useState(false);

  const uploadMovies = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/create-movies", {
        movies: dataMovies,
      });

      toast({ title: "Películas subidas con éxito" });
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg border-white-400 p-6 hover:bg-[#E50914] transition-all duration-300 ">
      <h1 className="text-xl font-bold mb-4"> Subir películas normales</h1>
      <Button
        className="w-full"
        variant={"outline"}
        onClick={uploadMovies}
        disabled={isLoading}
      >
        Subir películas
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
