import { readFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

const moviesJson = readFileSync('./data/movies.json', 'utf-8');
const movies = JSON.parse(moviesJson).movies;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    return res.status(200).json({ movie: randomMovie });
}