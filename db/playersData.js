const playersData = [
  { number: 10,	name: 'Sven Andrighetto', position: 'RW', age: 25, teamId: 8 },
  { number: 44,	name: 'Mark Barberio', position: 'D', age: 28, teamId: 8 },
  { number: 4, name: 'Tyson Barrie', position: 'D', age: 27, teamId: 8 },
  { number: 57,	name: 'Gabriel Bourque', position: 'LW', age: 28, teamId: 8 },
  { number: 18,	name: 'Derick Brassard', position: 'C', age: 31, teamId: 8 },
  { number: 11,	name: 'Matt Calvert', position: 'LW', age: 29, teamId: 8 },
  { number: 28,	name: 'Ian Cole', position: 'D', age: 29, teamId: 8 },
  { number: 37,	name: 'J.T. Compher', position: 'LW', age: 23, teamId: 8 },
  { number: 39,	name: 'Pavel Francouz', position: 'G', age: 28, teamId: 8 },
  { number: 49,	name: 'Samuel Girard', position: 'D', age: 20, teamId: 8 },
  { number: 27,	name: 'Ryan Graves', position: 'D', age: 23, teamId: 8 },
  { number: 31,	name: 'Philipp Grubauer', position: 'G', age: 27, teamId: 8 },
  { number: 6, name: 'Erik Johnson', position: 'D', age: 30, teamId: 8 },
  { number: 17, name: 'Tyson Jost', position: 'C', age: 20, teamId: 8 },
  { number: 91, name: 'Vladislav Kamenev', position: 'L', age: 	22, teamId: 8 },
  { number: 13, name: 'Alexander Kerfoot', position: 'C', age: 24, teamId: 8 },
  { number: 92, name: 'Gabriel Landeskog', position: 'LW', age: 26, teamId: 8 },
  { number: 29, name: 'Nathan MacKinnon', position: 'C', age: 23, teamId: 8 },
  { number: 12, name: 'Patrik Nemeth', position: 'D', age: 26, teamId: 8 },
  { number: 83, name: 'Matt Nieto', position: 'L', age: 	26, teamId: 8 },
  { number: 96, name: 'Mikko Rantanen', position: 'R', age: 	22, teamId: 8 },
  { number: 34, name: 'Carl Soderberg', position: 'C', age: 33, teamId: 8 },
  { number: 1, name: 'Semyon Varlamov', position: 'G', age: 30, teamId: 8 },
  { number: 22, name: 'Colin Wilson', position: 'C', age: 29, teamId: 8 },
  { number: 16, name: 'Nikita Zadorov', position: 'D', age: 2, teamId: 8 },
  { number: 4, name: 'Cam Fowler', position: 'D', age: 27, teamId: 1 },
  { number: 15, name: 'Ryan Getzlaf', position: 'C', age:	33, teamId: 1 },
  { number: 36, name: 'John Gibson', position: 'G', age: 25, teamId: 1 },
  { number: 38, name: 'Derek Grant', position: 'C', age: 28, teamId: 1 },
  { number: 2, name: 'Brendan Guhle', position: 'D', age: 21, teamId: 1 },
  { number: 14, name: 'Adam Henrique', position: 'C', age: 28, teamId: 1 },
  { number: 5, name: 'Korbinian Holzer', position: 'D', age: 30, teamId: 1 },
  { number: 1, name: 'Chad Johnson', position: 'G', age: 32, teamId: 1 },
  { number: 25, name: 'Ondrej Kase', position: 'R', age: 23, teamId: 1 },
  { number: 17, name: 'Ryan Kesler', position: 'C', age: 34, teamId: 1 },
  { number: 47, name: 'Hampus Lindholm', position: 'D', age: 25, teamId: 1 },
  { number: 42, name: 'Josh Manson', position: 'D', age: 27, teamId: 1 },
  { number: 30, name: 'Ryan Miller', position: 'G', age: 38, teamId: 1 },
  { number: 10, name: 'Corey Perry', position: 'R', age: 33, teamId: 1 },
  { number: 67, name: 'Rickard Rakell', position: 'R', age: 25, teamId: 1 },
  { number: 37, name: 'Nick Ritchie', position: 'L', age: 23, teamId: 1 },
  { number: 24, name: 'Carter Rowney', position: 'R', age: 29, teamId: 1 },
  { number: 29, name: 'Devin Shore', position: 'C', age: 24, teamId: 1 },
  { number: 33, name: 'Jakob Silfverberg', position: 'L', age: 28, teamId: 1 },
  { number: 11, name: 'Daniel Sprong', position: 'R', age: 21, teamId: 1 },
  { number: 61, name: 'Troy Terry', position: 'C', age: 21, teamId: 1 },
  { number: 45, name: 'Josh Archibald', position: 'RW', age: 26, teamId: 2 },
  { number: 75, name: 'Kyle Capobianco', position: 'D', age: 21, teamId: 2 },
  { number: 6, name: 'Jakob Chychrun', position: 'D', age: 20, teamId: 2 },
  { number: 44, name: 'Kevin Connauton', position: 'D', age: 28, teamId: 2 },
  { number: 25, name: 'Nick Cousins', position: 'C', age: 25, teamId: 2 },
  { number: 67, name: 'Lawson Crouse', position: 'LW', age: 21, teamId: 2 },
  { number: 55, name: 'Jason Demers', position: 'D', age: 30, teamId: 2 },
  { number: 18, name: 'Christian Dvorak', position: 'C', age: 22, teamId: 2 },
  { number: 23, name: 'Oliver Ekman', position: 'D', age: 27, teamId: 2 },
  { number: 36, name: 'Christian Fischer', position: 'RW', age: 21, teamId: 2 },
  { number: 17, name: 'Alex Galchenyuk', position: 'C', age: 24, teamId: 2 },
  { number: 83, name: 'Conor Garland', position: 'RW', age: 22, teamId: 2 },
  { number: 33, name: 'Alex Goligoski', position: 'D', age: 33, teamId: 2 },
  { number: 40, name: 'Michael Grabner', position: 'RW', age: 31, teamId: 2 },
  { number: 13, name: 'Vinnie Hinostroza', position: 'C', age: 24, teamId: 2 },
  { number: 4, name: 'Niklas Hjalmarsson', position: 'D', age: 31, teamId: 2 },
  { number: 9, name: 'Clayton Keller', position: 'C', age: 20, teamId: 2 },
  { number: 29, name: 'Mario Kempe', position: 'C', age: 30, teamId: 2 },
  { number: 35, name: 'Darcy Kuemper', position: 'G', age: 28, teamId: 2 },
  { number: 46, name: 'Ilya Lyubushkin', position: 'D', age: 24, teamId: 2 },
  { number: 82, name: 'Jordan Oesterle', position: 'D', age: 26, teamId: 2 },
  { number: 14, name: 'Richard Panik', position: 'RW', age: 27, teamId: 2 },
  { number: 30, name: 'Calvin Pickard', position: 'G', age: 26, teamId: 2 },
  { number: 32, name: 'Antti Raanta', position: 'G', age: 29, teamId: 2 },
  { number: 15, name: 'Brad Richardson', position: 'C', age: 33, teamId: 2 },
  { number: 8, name: 'Nick Schmaltz', position: 'C', age: 22, teamId: 2 },
  { number: 21, name: 'Derek Stepan', position: 'C', age: 28, teamId: 2 },
  { number: 55, name: 'Noel Acciari', position: 'C', age: 27, teamId: 3 },
  { number: 42, name: 'David Backes', position: 'C', age: 34, teamId: 3 },
  { number: 37, name: 'Patrice Bergeron', position: 'C', age: 33, teamId: 3 },
  { number: 25, name: 'Brandon Carlo', position: 'D', age: 22, teamId: 3 },
  { number: 33, name: 'Zdeno Chara', position: 'D', age: 41, teamId: 3 },
  { number: 75, name: 'Connor Clifton', position: 'D', age: 23, teamId: 3 },
  { number: 13, name: 'Charlie Coyle', position: 'C', age: 26, teamId: 3 },
  { number: 74, name: 'Jake DeBrusk', position: 'LW', age: 22, teamId: 3 },
  { number: 48, name: 'Matt Grzelcyk', position: 'D', age: 25, teamId: 3 },
  { number: 41, name: 'Jaroslav Halak', position: 'G', age: 33, teamId: 3 },
  { number: 43, name: 'Danton Heinen', position: 'C', age: LW, teamId: 3 },
  { number: 90, name: 'Marcus Johansson', position: 'C', age: W, teamId: 3 },
  { number: 44, name: 'Steven Kampfer', position: 'D', age: 30, teamId: 3 },
  { number: 46, name: 'David Krejci', position: 'C', age: 32, teamId: 3 },
  { number: 47, name: 'Torey Krug', position: 'D', age: 27, teamId: 3 },
  { number: 83, name: 'Karson Kuhlman', position: 'C', age: 23, teamId: 3 },
  { number: 52, name: 'Sean Kuraly', position: 'C', age: 26, teamId: 3 },
  { number: 63, name: 'Brad Marchand', position: 'LW', age: 30, teamId: 3 },
  { number: 73, name: 'Charlie McAvoy', position: 'D', age: 21, teamId: 3 },
  { number: 86, name: 'Kevan Miller', position: 'D', age: 31, teamId: 3 },
  { number: 27, name: 'John Moore', position: 'D', age: 28, teamId: 3 },
  { number: 20, name: 'Joakim Nordstrom', position: 'C', age: 26, teamId: 3 },
  { number: 88, name: 'David Pastrnak', position: 'RW', age: 22, teamId: 3 },
  { number: 40, name: 'Tuukka Rask', position: 'G', age: 31, teamId: 3 },
  { number: 14, name: 'Chris Wagner', position: 'C', age: 27, teamId: 3 },
  { number: 4, name: 'Zach Bogosian', position: 'D', age: 28, teamId: 4 },
  { number: 26, name: 'Rasmus Dahlin', position: 'D', age: 18, teamId: 4 },
  { number: 9, name: 'Jack Eichel', position: 'C', age: 22, teamId: 4 },
  { number: 28, name: 'Zemgus Girgensons', position: 'C', age: 25, teamId: 4 },
  { number: 48, name: 'Matt Hunwick', position: 'D', age: 33, teamId: 4 },
  { number: 40, name: 'Carter Hutton', position: 'G', age: 33, teamId: 4 },
  { number: 22, name: 'Johan Larsson', position: 'LW', age: 26, teamId: 4 },
  { number: 19, name: 'Jake McCabe', position: 'D', age: 25, teamId: 4 },
  { number: 37, name: 'Casey Mittelstadt', position: 'C', age: 20, teamId: 4 },
  { number: 62, name: 'Brandon Montour', position: 'D', age: 24, teamId: 4 },
  { number: 8, name: 'Casey Nelson', position: 'D', age: 26, teamId: 4 },
  { number: 21, name: 'Kyle Okposo', position: 'RW', age: 30, teamId: 4 },
  { number: 29, name: 'Jason Pominville', position: 'RW', age: 36, teamId: 4 },
  { number: 23, name: 'Sam Reinhart', position: 'C', age: 23, teamId: 4 },
  { number: 55, name: 'Rasmus Ristolainen', position: 'D', age: 24, teamId: 4 },
  { number: 71, name: 'Evan Rodrigues', position: 'C', age: 25, teamId: 4 },
  { number: 6, name: 'Marco Scandella', position: 'D', age: 28, teamId: 4 },
  { number: 43, name: 'Conor Sheary', position: 'LW', age: 26, teamId: 4 },
  { number: 53, name: 'Jeff Skinner', position: 'C', age: 26, teamId: 4 },
  { number: 17, name: 'Vladimir Sobotka', position: 'C', age: 31, teamId: 4 },
  { number: 35, name: 'Linus Ullmark', position: 'G', age: 25, teamId: 4 },
  { number: 20, name: 'Scott Wilson', position: 'C', age: 26, teamId: 4 },
  { number: 4, name: 'Rasmus Andersson', position: 'D', age: 22, teamId: 5 },
  { number: 11, name: 'Mikael Backlund', position: 'C', age: 29, teamId: 5 },
  { number: 93, name: 'Sam Bennett', position: 'C', age: 22, teamId: 5 },
  { number: 7, name: 'TJ Brodie', position: 'D', age: 28, teamId: 5 },
  { number: 27, name: 'Austin Czarnik', position: 'C', age: 26, teamId: 5 },
  { number: 29, name: 'Dillon Dube', position: 'C', age: 20, teamId: 5 },
  { number: 3, name: 'Oscar Fantenberg', position: 'D', age: 27, teamId: 5 },
  { number: 67, name: 'Michael Frolik', position: 'LW', age: 30, teamId: 5 },
  { number: 13, name: 'Johnny Gaudreau', position: 'LW', age: 25, teamId: 5 },
  { number: 5, name: 'Mark Giordano', position: 'D', age: 35, teamId: 5 },
  { number: 24, name: 'Travis Hamonic', position: 'D', age: 28, teamId: 5 },
  { number: 55, name: 'Noah Hanifin', position: 'D', age: 22, teamId: 5 },
  { number: 21, name: 'Garnet Hathaway', position: 'RW', age: 27, teamId: 5 },
  { number: 77, name: 'Mark Jankowski', position: 'C', age: 24, teamId: 5 },
  { number: 58, name: 'Oliver Kylington', position: 'D', age: 21, teamId: 5 },
  { number: 28, name: 'Elias Lindholm', position: 'C', age: 24, teamId: 5 },
  { number: 88, name: 'Andrew Mangiapane', position: 'LW', age: 22, teamId: 5 },
  { number: 23, name: 'Sean Monahan', position: 'C', age: 24, teamId: 5 },
  { number: 18, name: 'James Neal', position: 'LW', age: 31, teamId: 5 },
  { number: 6, name: 'Dalton Prout', position: 'D', age: 28, teamId: 5 },
  { number: 89, name: 'Alan Quine', position: 'C', age: 25, teamId: 5 },
  { number: 33, name: 'David Rittich', position: 'G', age: 26, teamId: 5 },
  { number: 10, name: 'Derek Ryan', position: 'C', age: 32, teamId: 5 },
  { number: 41, name: 'Mike Smith', position: 'G', age: 36, teamId: 5 },
  { number: 26, name: 'Michael Stone', position: 'D', age: 28, teamId: 5 },
  { number: 19, name: 'Matthew Tkachuk', position: 'LW', age: 21, teamId: 5 },
  { number: 8, name: 'Juuso Valimaki', position: 'D', age: 20, teamId: 5 },
  { number: 20, name: 'Sebastian Aho', position: 'RW', age: 21, teamId: 6 },
  { number: 24, name: 'Jake Bean', position: 'D', age: 20, teamId: 6 },
  { number: 64, name: 'Clark Bishop', position: 'C', age: 22, teamId: 6 },
  { number: 44, name: 'Calvin de', position: 'ca', age: D, teamId: 6 },
  { number: 27, name: 'Justin Faulk', position: 'D', age: 26, teamId: 6 },
  { number: 79, name: 'Micheal Ferland', position: 'LW', age: 26, teamId: 6 },
  { number: 4, name: 'Haydn Fleury', position: 'D', age: 22, teamId: 6 },
  { number: 13, name: 'Warren Foegele', position: 'LW', age: 22, teamId: 6 },
  { number: 19, name: 'Dougie Hamilton', position: 'D', age: 25, teamId: 6 },
  { number: 8, name: 'Saku Maenalanen', position: 'RW', age: 24, teamId: 6 },
  { number: 48, name: 'Jordan Martinook', position: 'LW', age: 26, teamId: 6 },
  { number: 35, name: 'Curtis McElhinney', position: 'G', age: 35, teamId: 6 },
  { number: 23, name: 'Brock McGinn', position: 'LW', age: 24, teamId: 6 },
  { number: 42, name: 'Greg McKegg', position: 'C', age: 26, teamId: 6 },
  { number: 34, name: 'Petr Mrazek', position: 'G', age: 26, teamId: 6 },
  { number: 39, name: 'Alex Nedeljkovic', position: 'G', age: 23, teamId: 6 },
  { number: 21, name: 'Nino Niederreiter', position: 'RW', age: 26, teamId: 6 },
  { number: 22, name: 'Brett Pesce', position: 'D', age: 24, teamId: 6 },
  { number: 74, name: 'Jaccob Slavin', position: 'D', age: 24, teamId: 6 },
  { number: 11, name: 'Jordan Staal', position: 'C', age: 30, teamId: 6 },
  { number: 37, name: 'Andrei Svechnikov', position: 'RW', age: 18, teamId: 6 },
  { number: 86, name: 'Teuvo Teravainen', position: 'C', age: 24, teamId: 6 },
  { number: 57, name: 'Trevor van', position: 'us', age: D, teamId: 6 },
  { number: 71, name: 'Lucas Wallmark', position: 'C', age: 23, teamId: 6 },
  { number: 14, name: 'Justin Williams', position: 'RW', age: 37, teamId: 6 },
  { number: 15, name: 'Artem Anisimov', position: 'C', age: 30, teamId: 7 },
  { number: 91, name: 'Drake Caggiula', position: 'LW', age: 24, teamId: 7 },
  { number: 50, name: 'Corey Crawford', position: 'G', age: 34, teamId: 7 },
  { number: 63, name: 'Carl Dahlstrom', position: 'D', age: 24, teamId: 7 },
  { number: 12, name: 'Alex Debrincat', position: 'RW', age: 21, teamId: 7 },
  { number: 42, name: 'Gustav Forsling', position: 'D', age: 22, teamId: 7 },
  { number: 56, name: 'Erik Gustafsson', position: 'D', age: 26, teamId: 7 },
  { number: 40, name: 'John Hayden', position: 'C', age: 23, teamId: 7 },
  { number: 24, name: 'Dominik Kahun', position: 'C', age: 23, teamId: 7 },
  { number: 64, name: 'David Kampf', position: 'C', age: 24, teamId: 7 },
  { number: 88, name: 'Patrick Kane', position: 'RW', age: 30, teamId: 7 },
  { number: 2, name: 'Duncan Keith', position: 'D', age: 35, teamId: 7 },
  { number: 68, name: 'Slater Koekkoek', position: 'D', age: 24, teamId: 7 },
  { number: 16, name: 'Marcus Kruger', position: 'C', age: 28, teamId: 7 },
  { number: 14, name: 'Chris Kunitz', position: 'LW', age: 39, teamId: 7 },
  { number: 5, name: 'Connor Murphy', position: 'D', age: 25, teamId: 7 },
  { number: 11, name: 'Brendan Perlini', position: 'LW', age: 22, teamId: 7 },
  { number: 20, name: 'Brandon Saad', position: 'LW', age: 26, teamId: 7 },
  { number: 7, name: 'Brent Seabrook', position: 'D', age: 33, teamId: 7 },
  { number: 17, name: 'Dylan Strome', position: 'C', age: 21, teamId: 7 },
  { number: 19, name: 'Jonathan Toews', position: 'C', age: 30, teamId: 7 },
  { number: 30, name: 'Cam Ward', position: 'G', age: 34, teamId: 7 },
  { number: 77,name: 'Josh Anderson', position:'RW', age: 24, teamId: 8 },
  { number: 13,name: 'Cam Atkinson', position:'RW', age: 29, teamId: 8 },
  { number: 28,name: 'Oliver Bjorkstrand', position:'RW', age: 23, teamId: 8 },
  { number: 72,name: 'Sergei Bobrovsky', position:'G', age: 30, teamId: 8 },
  { number: 6,name: 'Adam Clendening', position:'D', age: 26, teamId: 8 },
  { number: 17,name: 'Brandon Dubinsky', position:'C', age: 32, teamId: 8 },
  { number: 18,name: 'Pierre-Luc', position:'ca', age: LW, teamId: 8 },
  { number: 95,name: 'Matt Duchene', position:'C', age: 28, teamId: 8 },
  { number: 19,name: 'Ryan Dzingel', position:'C', age: 26, teamId: 8 },
  { number: 71,name: 'Nick Foligno', position:'LW', age: 31, teamId: 8 },
  { number: 37,name: 'Markus Hannikainen', position:'LW', age: 25, teamId: 8 },
  { number: 4,name: 'Scott Harrington', position:'D', age: 25, teamId: 8 },
  { number: 38,name: 'Boone Jenner', position:'C', age: 25, teamId: 8 },
  { number: 3,name: 'Seth Jones', position:'D', age: 24, teamId: 8 },
  { number: 70,name: 'Joonas Korpisalo', position:'G', age: 24, teamId: 8 },
  { number: 14,name: 'Dean Kukan', position:'D', age: 25, teamId: 8 },
  { number: 54,name: 'Adam McQuaid', position:'D', age: 32, teamId: 8 },
  { number: 27,name: 'Ryan Murray', position:'D', age: 25, teamId: 8 },
  { number: 20,name: 'Riley Nash', position:'C', age: 29, teamId: 8 },
  { number: 65,name: 'Markus Nutivaara', position:'D', age: 24, teamId: 8 },
  { number: 9,name: 'Artemi Panarin', position:'LW', age: 27, teamId: 8 },
  { number: 50,name: 'Eric Robinson', position:'LW', age: 23, teamId: 8 },
  { number: 58,name: 'David Savard', position:'D', age: 28, teamId: 8 },
  { number: 45,name: 'Lukas Sedlak', position:'C', age: 25, teamId: 8 },
  { number: 42,name: 'Alexandre Texier', position:'C', age: 19, teamId: 8 },
  { number: 10,name: 'Alexander Wennberg', position:'C', age: 24, teamId: 8 },
  { number: 8, name: 'Zach Werenski', position: 'D', age: 21, teamId: 8 },
  { number: 44, name: 'Gavin Bayreuther', position: 'D', age:	24, teamId: 9 },
  { number: 14, name: 'Jamie Benn', position: 'LW', age:	29, teamId: 9 },
  { number: 30, name: 'Ben Bishop', position: 'G', age:	32, teamId: 9 },
  { number: 41, name: 'Landon Bow', position: 'G', age:	23, teamId: 9 },
  { number: 17, name: 'Andrew Cogliano', position: 'LW', age:	31, teamId: 9 },
  { number: 15, name: 'Blake Comeau', position: 'RW', age:	32, teamId: 9 },
  { number: 16, name: 'Jason Dickinson', position: 'C', age:	23, teamId: 9 },
  { number: 37, name: 'Justin Dowling', position: 'C', age:	28, teamId: 9 },
  { number: 12, name: 'Radek Faksa', position: 'C', age:	25, teamId: 9 },
  { number: 42, name: 'Taylor Fedun', position: 'D', age:	30, teamId: 9 },
  { number: 34, name: 'Denis Gurianov', position: 'RW', age:	21, teamId: 9 },
  { number: 39, name: 'Joel Hanley', position: 'D', age:	27, teamId: 9 },
  { number: 11, name: 'Martin Hanzal', position: 'C', age:	31, teamId: 9 },
  { number: 48, name: 'Dillon Heatherington', position: 'D', age:	23, teamId: 9 },
  { number: 4, name: 'Miro Heiskanen', position: 'D', age:	19, teamId: 9 },
  { number: 24, name: 'Roope Hintz', position: 'LW', age:	22, teamId: 9 },
  { number: 6, name: 'Julius Honka', position: 'D', age:	23, teamId: 9 },
  { number: 13, name: 'Mattias Janmark', position: 'C', age:	26, teamId: 9 },
  { number: 35, name: 'Anton Khudobin', position: 'G', age:	32, teamId: 9 },
  { number: 3, name: 'John Klingberg', position: 'D', age:	26, teamId: 9 },
  { number: 38, name: 'Joel L', position: 'sperance', age:	us, teamId: 9 },
  { number: 23, name: 'Esa Lindell', position: 'D', age:	24, teamId: 9 },
  { number: 21, name: 'Ben Lovejoy', position: 'D', age:	34, teamId: 9 },
  { number: 33, name: 'Marc Methot', position: 'D', age:	33, teamId: 9 },
  { number: 43, name: 'Valeri Nichushkin', position: 'RW', age:	23, teamId: 9 },
  { number: 2, name: 'Jamie Oleksiak', position: 'D', age:	26, teamId: 9 },
  { number: 18, name: 'Tyler Pitlick', position: 'C', age:	27, teamId: 9 },
  { number: 45, name: 'Roman Polak', position: 'D', age:	32, teamId: 9 },
  { number: 47, name: 'Alexander Radulov', position: 'RW', age:	32, teamId: 9 },
  { number: 25, name: 'Brett Ritchie', position: 'RW', age:	25, teamId: 9 },
  { number: 91, name: 'Tyler Seguin', position: 'C', age:	27, teamId: 9 },
  { number: 90, name: 'Jason Spezza', position: 'C', age:	35, teamId: 9 },
  { number: 36, name: 'Mats Zuccarello', position: 'LW', age:	31, teamId: 9 },

];

module.exports = playersData;