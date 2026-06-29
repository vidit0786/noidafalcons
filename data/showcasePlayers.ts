export type ShowcasePlayerRole = 'Batter' | 'Bowler' | 'All-Rounder' | 'Wicket Keeper';

export interface ShowcasePlayer {
  id: string;
  name: string;
  number: number;
  role: ShowcasePlayerRole;
  image: string;
}

export const showcasePlayers: ShowcasePlayer[] = [
  { id: 'aarav-sharma', name: 'Aarav Sharma', number: 7, role: 'Batter', image: '/players/placeholder-player.png' },
  { id: 'rohan-singh', name: 'Rohan Singh', number: 18, role: 'Bowler', image: '/players/placeholder-player.png' },
  { id: 'aditya-verma', name: 'Aditya Verma', number: 11, role: 'All-Rounder', image: '/players/placeholder-player.png' },
  { id: 'karan-malik', name: 'Karan Malik', number: 45, role: 'Wicket Keeper', image: '/players/placeholder-player.png' },
  { id: 'aryan-chauhan', name: 'Aryan Chauhan', number: 99, role: 'Batter', image: '/players/placeholder-player.png' },
  { id: 'vivaan-gupta', name: 'Vivaan Gupta', number: 23, role: 'Bowler', image: '/players/placeholder-player.png' },
  { id: 'dhruv-tyagi', name: 'Dhruv Tyagi', number: 31, role: 'All-Rounder', image: '/players/placeholder-player.png' },
  { id: 'yash-rajput', name: 'Yash Rajput', number: 14, role: 'Batter', image: '/players/placeholder-player.png' },
  { id: 'harsh-beniwal', name: 'Harsh Beniwal', number: 52, role: 'Bowler', image: '/players/placeholder-player.png' },
  { id: 'kartik-yadav', name: 'Kartik Yadav', number: 8, role: 'Wicket Keeper', image: '/players/placeholder-player.png' },
  { id: 'rishabh-rana', name: 'Rishabh Rana', number: 27, role: 'All-Rounder', image: '/players/placeholder-player.png' },
  { id: 'mohit-chauhan', name: 'Mohit Chauhan', number: 66, role: 'Bowler', image: '/players/placeholder-player.png' },
  { id: 'ankit-saini', name: 'Ankit Saini', number: 3, role: 'Batter', image: '/players/placeholder-player.png' },
  { id: 'dev-thakur', name: 'Dev Thakur', number: 19, role: 'All-Rounder', image: '/players/placeholder-player.png' },
  { id: 'lakshya-tomar', name: 'Lakshya Tomar', number: 88, role: 'Bowler', image: '/players/placeholder-player.png' },
];
