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
  { number: 36, name: 'Mats Zuccarello', position: 'LW', age: 31, teamId: 9 },
  { number: 8, name: 'Justin Abdelkader', position: 'LW', age: 31, teamId: 10 },
  { number: 72, name: 'Andreas Athanasiou', position: 'C', age: 24, teamId: 10 },
  { number: 45, name: 'Jonathan Bernier', position: 'G', age: 30, teamId: 10 },
  { number: 59, name: 'Tyler Bertuzzi', position: 'LW', age: 23, teamId: 10 },
  { number: 74, name: 'Madison Bowey', position: 'D', age: 23, teamId: 10 },
  { number: 84, name: 'Jake Chelios', position: 'D', age: 27, teamId: 10 },
  { number: 83, name: 'Trevor Daley', position: 'D', age: 35, teamId: 10 },
  { number: 61, name: 'Jacob De', position: 'Rose', age: se, teamId: 10 },
  { number: 65, name: 'Danny DeKeyser', position: 'D', age: 28, teamId: 10 },
  { number: 70, name: 'Christoffer Ehn', position: 'C', age: 22, teamId: 10 },
  { number: 52, name: 'Jonathan Ericsson', position: 'D', age: 34, teamId: 10 },
  { number: 42, name: 'Martin Frk', position: 'RW', age: 25, teamId: 10 },
  { number: 36, name: 'Kaden Fulcher', position: 'G', age: 20, teamId: 10 },
  { number: 41, name: 'Luke Glendening', position: 'C', age: 29, teamId: 10 },
  { number: 25, name: 'Mike Green', position: 'D', age: 33, teamId: 10 },
  { number: 43, name: 'Darren Helm', position: 'C', age: 32, teamId: 10 },
  { number: 2, name: 'Joe Hicketts', position: 'D', age: 22, teamId: 10 },
  { number: 53, name: 'Taro Hirose', position: 'LW', age: 22, teamId: 10 },
  { number: 35, name: 'Jimmy Howard', position: 'G', age: 34, teamId: 10 },
  { number: 17, name: 'Filip Hronek', position: 'D', age: 21, teamId: 10 },
  { number: 55, name: 'Niklas Kronwall', position: 'D', age: 38, teamId: 10 },
  { number: 56, name: 'Ryan Kuffner', position: 'LW', age: 22, teamId: 10 },
  { number: 71, name: 'Dylan Larkin', position: 'C', age: 22, teamId: 10 },
  { number: 39, name: 'Anthony Mantha', position: 'RW', age: 24, teamId: 10 },
  { number: 20, name: 'Dylan McIlrath', position: 'D', age: 26, teamId: 10 },
  { number: 51, name: 'Frans Nielsen', position: 'C', age: 34, teamId: 10 },
  { number: 54, name: 'Matt Puempel', position: 'LW', age: 26, teamId: 10 },
  { number: 27, name: 'Michael Rasmussen', position: 'C', age: 19, teamId: 10 },
  { number: 23, name: 'Dominic Turgeon', position: 'C', age: 22, teamId: 10 },
  { number: 26, name: 'Thomas Vanek', position: 'LW', age: 35, teamId: 10 },
  { number: 28, name: 'Luke Witkowski', position: 'D', age: 28, teamId: 10 },
  { number: 83, name: 'Matt Benning', positions: 'D', age: 24, teamId: 11 },
  { number: 28, name: 'Kyle Brodziak', positions: 'C', age: 34, teamId: 11 },
  { number: 12, name: 'Colby Cave', positions: 'C', age: 24, teamId: 11 },
  { number: 39, name: 'Alex Chiasson', positions: 'RW', age: 28, teamId: 11 },
  { number: 29, name: 'Leon Draisaitl', positions: 'C', age: 23, teamId: 11 },
  { number: 89, name: 'Sam Gagner', positions: 'C', age: 29, teamId: 11 },
  { number: 5, name: 'Kevin Gravel', positions: 'D', age: 26, teamId: 11 },
  { number: 44, name: 'Zack Kassian', positions: 'RW', age: 28, teamId: 11 },
  { number: 16, name: 'Jujhar Khaira', positions: 'LW', age: 24, teamId: 11 },
  { number: 77, name: 'Oscar Klefbom', positions: 'D', age: 25, teamId: 11 },
  { number: 19, name: 'Mikko Koskinen', positions: 'G', age: 30, teamId: 11 },
  { number: 6, name: 'Adam Larsson', positions: 'D', age: 26, teamId: 11 },
  { number: 27, name: 'Milan Lucic', positions: 'LW', age: 30, teamId: 11 },
  { number: 97, name: 'Connor McDavid', positions: 'C', age: 22, teamId: 11 },
  { number: 93, name: 'Ryan Nugent', positions: 'opkins', age: ca, teamId: 11 },
  { number: 25, name: 'Darnell Nurse', positions: 'D', age: 23, teamId: 11 },
  { number: 15, name: 'Alexander Petrovic', positions: 'D', age: 26, teamId: 11 },
  { number: 98, name: 'Jesse Puljujarvi', positions: 'RW', age: 20, teamId: 11 },
  { number: 8, name: 'Ty Rattie', positions: 'RW', age: 25, teamId: 11 },
  { number: 22, name: 'Tobias Rieder', positions: 'C', age: 26, teamId: 11 },
  { number: 4, name: 'Kris Russell', positions: 'D', age: 31, teamId: 11 },
  { number: 2, name: 'Andrej Sekera', positions: 'D', age: 32, teamId: 11 },
  { number: 32, name: 'Anthony Stolarz', positions: 'G', age: 25, teamId: 11 },
  { number: 16, name: 'Aleksander Barkov', position: 'C', age: 23, teamId: 12 },
  { number: 95, name: 'Henrik Borgstrom', position: 'C', age: 21, teamId: 12 },
  { number: 22, name: 'Troy Brouwer', position: 'RW', age: 33, teamId: 12 },
  { number: 2, name: 'Josh Brown', position: 'D', age: 25, teamId: 12 },
  { number: 63, name: 'Evgenii Dadonov', position: 'RW', age: 29, teamId: 12 },
  { number: 5, name: 'Aaron Ekblad', position: 'D', age: 22, teamId: 12 },
  { number: 8, name: 'Jayce Hawryluk', position: 'C', age: 23, teamId: 12 },
  { number: 68, name: 'Mike Hoffman', position: 'C', age: 29, teamId: 12 },
  { number: 11, name: 'Jonathan Huberdeau', position: 'C', age: 25, teamId: 12 },
  { number: 73, name: 'Dryden Hunt', position: 'LW', age: 23, teamId: 12 },
  { number: 25, name: 'Brady Keeper', position: 'D', age: 22, teamId: 12 },
  { number: 1, name: 'Roberto Luongo', position: 'G', age: 39, teamId: 12 },
  { number: 17, name: 'Derek MacKenzie', position: 'C', age: 37, teamId: 12 },
  { number: 62, name: 'Denis Malgin', position: 'C', age: 22, teamId: 12 },
  { number: 19, name: 'Mike Matheson', position: 'D', age: 24, teamId: 12 },
  { number: 12, name: 'Ian McCoshen', position: 'D', age: 23, teamId: 12 },
  { number: 88, name: 'Jamie McGinn', position: 'LW', age: 30, teamId: 12 },
  { number: 33, name: 'Sam Montembeault', position: 'G', age: 22, teamId: 12 },
  { number: 13, name: 'Mark Pysyk', position: 'D', age: 27, teamId: 12 },
  { number: 34, name: 'James Reimer', position: 'G', age: 30, teamId: 12 },
  { number: 7, name: 'Colton Sceviour', position: 'C', age: 29, teamId: 12 },
  { number: 15, name: 'Riley Sheahan', position: 'C', age: 27, teamId: 12 },
  { number: 21, name: 'Vincent Trocheck', position: 'C', age: 25, teamId: 12 },
  { number: 72, name: 'Frank Vatrano', position: 'LW', age: 24, teamId: 12 },
  { number: 52, name: 'MacKenzie Weegar', position: 'D', age: 25, teamId: 12 },
  { number: 3, name: 'Keith Yandle', position: 'D', age: 32, teamId: 12 },
  { number: 76, name: 'Jonny Brodzinski', position: 'C', age: 25, teamId: 13 },
  { number: 23, name: 'Dustin Brown', position: 'RW', age: 34, teamId: 13 },
  { number: 36, name: 'Jack Campbell', position: 'G', age: 27, teamId: 13 },
  { number: 77, name: 'Jeff Carter', position: 'C', age: 34, teamId: 13 },
  { number: 13, name: 'Kyle Clifford', position: 'LW', age: 28, teamId: 13 },
  { number: 8, name: 'Drew Doughty', position: 'D', age: 29, teamId: 13 },
  { number: 24, name: 'Derek Forbort', position: 'D', age: 26, teamId: 13 },
  { number: 38, name: 'Carl Grundstrom', position: 'RW', age: 21, teamId: 13 },
  { number: 19, name: 'Alex Iafallo', position: 'C', age: 25, teamId: 13 },
  { number: 9, name: 'Adrian Kempe', position: 'LW', age: 22, teamId: 13 },
  { number: 11, name: 'Anze Kopitar', position: '	si', age: C, teamId: 13 },
  { number: 17, name: 'Ilya Kovalchuk', position: 'LW', age: 35, teamId: 13 },
  { number: 2, name: 'Paul LaDue', position: 'D', age: 26, teamId: 13 },
  { number: 14, name: 'Brendan Leipsic', position: 'LW', age: 24, teamId: 13 },
  { number: 22, name: 'Trevor Lewis', position: 'C', age: 32, teamId: 13 },
  { number: 46, name: 'Blake Lizotte', position: 'C', age: 21, teamId: 13 },
  { number: 56, name: 'Kurtis MacDermid', position: 'D', age: 24, teamId: 13 },
  { number: 27, name: 'Alec Martinez', position: 'D', age: 31, teamId: 13 },
  { number: 3, name: 'Dion Phaneuf', position: 'D', age: 33, teamId: 13 },
  { number: 32, name: 'Jonathan Quick', position: 'G', age: 33, teamId: 13 },
  { number: 81, name: 'Matt Roy', position: 'D', age: 23, teamId: 13 },
  { number: 73, name: 'Tyler Toffoli', position: 'C', age: 26, teamId: 13 },
  { number: 51, name: 'Austin Wagner', position: 'LW', age: 21, teamId: 13 },
  { number: 61, name: 'Sean Walker', position: 'D', age: 24, teamId: 13 },
  { number: 26, name: 'Pontus Aberg', position: 'LW', age: 25, teamId: 14 },
  { number: 2, name: 'Anthony Bitetto', position: 'D', age: 28, teamId: 14 },
  { number: 25, name: 'Jonas Brodin', position: 'D', age: 25, teamId: 14 },
  { number: 40, name: 'Devan Dubnyk', position: 'G', age: 32, teamId: 14 },
  { number: 24, name: 'Matt Dumba', position: 'D', age: 24, teamId: 14 },
  { number: 14, name: 'Joel Eriksson', position: 'se', age: C, teamId: 14 },
  { number: 21, name: 'Eric Fehr', position: 'RW', age: 33, teamId: 14 },
  { number: 22, name: 'Kevin Fiala', position: 'LW', age: 22, teamId: 14 },
  { number: 17, name: 'Marcus Foligno', position: 'LW', age: 27, teamId: 14 },
  { number: 77, name: 'Brad Hunt', position: 'D', age: 30, teamId: 14 },
  { number: 9, name: 'Mikko Koivu', position: 'C', age: 35, teamId: 14 },
  { number: 11, name: 'Zach Parise', position: 'LW', age: 34, teamId: 14 },
  { number: 29, name: 'Greg Pateryn', position: 'D', age: 28, teamId: 14 },
  { number: 49, name: 'Victor Rask', position: 'C', age: 25, teamId: 14 },
  { number: 10, name: 'Matt Read', position: 'RW', age: 32, teamId: 14 },
  { number: 36, name: 'Nick Seeler', position: 'D', age: 25, teamId: 14 },
  { number: 46, name: 'Jared Spurgeon', position: 'D', age: 29, teamId: 14 },
  { number: 12, name: 'Eric Staal', position: 'C', age: 34, teamId: 14 },
  { number: 32, name: 'Alex Stalock', position: 'G', age: 31, teamId: 14 },
  { number: 7, name: 'Nico Sturm', position: 'C', age: 23, teamId: 14 },
  { number: 20, name: 'Ryan Suter', position: 'D', age: 34, teamId: 14 },
  { number: 16, name: 'Jason Zucker', position: 'LW', age: 27, teamId: 14 },
  { number: 23, name: 'J.T. Brown', position: 'RW', age: 28, teamId: 14 },
  { number: 40, name: 'Joel Armia', position: 'RW', age: 25, teamId: 15 },
  { number: 8, name: 'Jordie Benn', position: 'D', age: 31, teamId: 15 },
  { number: 41, name: 'Paul Byron', position: 'C', age: 29, teamId: 15 },
  { number: 24, name: 'Phillip Danault', position: 'LW', age: 25, teamId: 15 },
  { number: 20, name: 'Nicolas Deslauriers', position: 'LW', age: 27, teamId: 15 },
  { number: 13, name: 'Max Domi', position: 'LW', age: 23, teamId: 15 },
  { number: 92, name: 'Jonathan Drouin', position: 'LW', age: 23, teamId: 15 },
  { number: 32, name: 'Christian Folin', position: 'D', age: 27, teamId: 15 },
  { number: 11, name: 'Brendan Gallagher', position: 'RW', age: 26, teamId: 15 },
  { number: 54, name: 'Charles Hudon', position: 'LW', age: 24, teamId: 15 },
  { number: 15, name: 'Jesperi Kotkaniemi', position: 'C', age: 18, teamId: 15 },
  { number: 17, name: 'Brett Kulak', position: 'D', age: 25, teamId: 15 },
  { number: 62, name: 'Artturi Lehkonen', position: 'LW', age: 23, teamId: 15 },
  { number: 39, name: 'Charlie Lindgren', position: 'G', age: 25, teamId: 15 },
  { number: 53, name: 'Victor Mete', position: 'D', age: 20, teamId: 15 },
  { number: 37, name: 'Antti Niemi', position: 'G', age: 35, teamId: 15 },
  { number: 63, name: 'Matthew Peca', position: 'C', age: 25, teamId: 15 },
  { number: 26, name: 'Jeff Petry', position: 'D', age: 31, teamId: 15 },
  { number: 25, name: 'Ryan Poehling', position: 'C', age: 20, teamId: 15 },
  { number: 31, name: 'Carey Price', position: 'G', age: 31, teamId: 15 },
  { number: 28, name: 'Mike Reilly', position: 'D', age: 25, teamId: 15 },
  { number: 65, name: 'Andrew Shaw', position: 'C', age: 27, teamId: 15 },
  { number: 90, name: 'Tomas Tatar', position: 'C', age: 28, teamId: 15 },
  { number: 21, name: 'Nate Thompson', position: 'C', age: 34, teamId: 15 },
  { number: 43, name: 'Jordan Weal', position: 'C', age: 26, teamId: 15 },
  { number: 6, name: 'Shea Weber', position: 'D', age: 33, teamId: 15 },
  { number: 22, name: 'Dale Weise', position: 'RW', age: 30, teamId: 15 },
  { number: 33, name: 'Viktor Arvidsson', position: 'LW', age: 25, teamId: 16 },
  { number: 13, name: 'Nick Bonino', position: 'C', age: 30, teamId: 16 },
  { number: 11, name: 'Brian Boyle', position: 'C', age: 34, teamId: 16 },
  { number: 14, name: 'Mattias Ekholm', position: 'D', age: 28, teamId: 16 },
  { number: 4, name: 'Ryan Ellis', position: 'D', age: 28, teamId: 16 },
  { number: 57, name: 'Dante Fabbro', position: 'D', age: 20, teamId: 16 },
  { number: 9, name: 'Filip Forsberg', position: 'C', age: 24, teamId: 16 },
  { number: 89, name: 'Frederick Gaudreau', position: 'C', age: 25, teamId: 16 },
  { number: 64, name: 'Mikael Granlund', position: 'C', age: 26, teamId: 16 },
  { number: 23, name: 'Rocco Grimaldi', position: 'C', age: 25, teamId: 16 },
  { number: 5, name: 'Dan Hamhuis', position: 'D', age: 36, teamId: 16 },
  { number: 52, name: 'Matt Irwin', position: 'D', age: 31, teamId: 16 },
  { number: 19, name: 'Calle Jarnkrok', position: 'C', age: 27, teamId: 16 },
  { number: 92, name: 'Ryan Johansen', position: 'C', age: 26, teamId: 16 },
  { number: 59, name: 'Roman Josi', position: 'D', age: 28, teamId: 16 },
  { number: 55, name: 'Cody McLeod', position: 'LW', age: 34, teamId: 16 },
  { number: 16, name: 'Rem Pitlick', position: 'C', age: 21, teamId: 16 },
  { number: 36, name: 'Zac Rinaldo', position: 'C', age: 28, teamId: 16 },
  { number: 35, name: 'Pekka Rinne', position: 'G', age: 36, teamId: 16 },
  { number: 20, name: 'Miikka Salomaki', position: 'RW', age: 25, teamId: 16 },
  { number: 74, name: 'Juuse Saros', position: 'G', age: 23, teamId: 16 },
  { number: 17, name: 'Wayne Simmonds', position: 'RW', age: 30, teamId: 16 },
  { number: 10, name: 'Colton Sissons', position: 'C', age: 25, teamId: 16 },
  { number: 15, name: 'Craig Smith', position: 'C', age: 29, teamId: 16 },
  { number: 76, name: 'P.K. Suban', position: 'D', age: 29, teamId: 16 },
  { number: 8, name: 'Kyle Turris', position: 'C', age: 29, teamId: 16 },
  { number: 51, name: 'Austin Watson', position: 'LW', age: 27, teamId: 16 },
  { number: 7, name: 'Yannick Weber', position: 'D', age: 30, teamId: 16 },
  { number: 17, name: 'Kenny Agostino', position: 'LW', age: 26, teamId: 17 },
  { number: 29, name: 'Mackenzie Blackwood', position: 'G', age: 22, teamId: 17 },
  { number: 63, name: 'Jesper Bratt', position: 'W', age: 20, teamId: 17 },
  { number: 8, name: 'Will Butcher', position: 'D', age: 24, teamId: 17 },
  { number: 5, name: 'Connor Carrick', position: 'D', age: 24, teamId: 17 },
  { number: 20, name: 'Blake Coleman', position: 'C', age: 27, teamId: 17 },
  { number: 39, name: 'Kurtis Gabriel', position: 'RW', age: 25, teamId: 17 },
  { number: 6, name: 'Andy Greene', position: 'D', age: 36, teamId: 17 },
  { number: 9, name: 'Taylor Hall', position: 'LW', age: 27, teamId: 17 },
  { number: 13, name: 'Nico Hischier', position: 'C', age: 20, teamId: 17 },
  { number: 25, name: 'Mirco Mueller', position: 'D', age: 23, teamId: 17 },
  { number: 23, name: 'Stefan Noesen', position: 'RW', age: 25, teamId: 17 },
  { number: 21, name: 'Kyle Palmieri', position: 'RW', age: 27, teamId: 17 },
  { number: 58, name: 'Kevin Rooney', position: 'C', age: 25, teamId: 17 },
  { number: 16, name: 'Steven Santini', position: 'D', age: 23, teamId: 17 },
  { number: 35, name: 'Cory Schneider', position: 'G', age: 32, teamId: 17 },
  { number: 28, name: 'Damon Severson', position: 'D', age: 24, teamId: 17 },
  { number: 18, name: 'Drew Stafford', position: 'RW', age: 33, teamId: 17 },
  { number: 45, name: 'Sami Vatanen', position: 'D', age: 27, teamId: 17 },
  { number: 44, name: 'Miles Wood', position: 'LW', age: 23, teamId: 17 },
  { number: 74, name: 'Egor Yakovlev', position: 'D', age: 27, teamId: 17 },
  { number: 37, name: 'Pavel Zacha', position: 'C', age: 21, teamId: 17 },
  { number: 19, name: 'Travis Zajac', position: 'C', age: 33, teamId: 17 },
  { number: 12, name: 'Josh Bailey', position: 'C', age: 29, teamId: 18 },
  { number: 13, name: 'Mathew Barzal', position: 'C', age: 21, teamId: 18 },
  { number: 18, name: 'Anthony Beauvillier', position: 'LW', age: 21, teamId: 18 },
  { number: 55, name: 'Johnny Boychuk', position: 'D', age: 35, teamId: 18 },
  { number: 53, name: 'Casey Cizikas', position: 'C', age: 27, teamId: 18 },
  { number: 15, name: 'Cal Clutterbuck', position: 'RW', age: 31, teamId: 18 },
  { number: 28, name: 'Michael Dal', position: 'ca', age: LW, teamId: 18 },
  { number: 7, name: 'Jordan Eberle', position: 'RW', age: 28, teamId: 18 },
  { number: 51, name: 'Valtteri Filppula', position: 'C', age: 34, teamId: 18 },
  { number: 11, name: 'Tanner Fritz', position: 'C', age: 27, teamId: 18 },
  { number: 1, name: 'Thomas Greiss', position: 'G', age: 33, teamId: 18 },
  { number: 4, name: 'Thomas Hickey', position: 'D', age: 29, teamId: 18 },
  { number: 32, name: 'Ross Johnston', position: 'LW', age: 24, teamId: 18 },
  { number: 47, name: 'Leo Komarov', position: 'C', age: 32, teamId: 18 },
  { number: 14, name: 'Tom Kuhnhackl', position: 'RW', age: 27, teamId: 18 },
  { number: 16, name: 'Andrew Ladd', position: 'LW', age: 33, teamId: 18 },
  { number: 2, name: 'Nick Leddy', position: 'D', age: 27, teamId: 18 },
  { number: 27, name: 'Anders Lee', position: 'C', age: 28, teamId: 18 },
  { number: 40, name: 'Robin Lehner', position: 'G', age: 27, teamId: 18 },
  { number: 17, name: 'Matt Martin', position: 'LW', age: 29, teamId: 18 },
  { number: 24, name: 'Scott Mayfield', position: 'D', age: 26, teamId: 18 },
  { number: 29, name: 'Brock Nelson', position: 'C', age: 27, teamId: 18 },
  { number: 3, name: 'Adam Pelech', position: 'D', age: 24, teamId: 18 },
  { number: 6, name: 'Ryan Pulock', position: 'D', age: 24, teamId: 18 },
  { number: 21, name: 'Luca Sbisa', position: 'D', age: 29, teamId: 18 },
  { number: 25, name: 'Devon Toews', position: 'D', age: 24, teamId: 18 },
  { number: 50, name: 'Lias Andersson', position: 'C', age: 20, teamId: 19 },
  { number: 23, name: 'Connor Brickley', position: 'C', age: 26, teamId: 19 },
  { number: 89, name: 'Pavel Buchnevich', position: 'LW', age: 23, teamId: 19 },
  { number: 72, name: 'Filip Chytil', position: 'C', age: 19, teamId: 19 },
  { number: 33, name: 'Fredrik Claesson', position: 'D', age: 26, teamId: 19 },
  { number: 77, name: 'Tony DeAngelo', position: 'D', age: 23, teamId: 19 },
  { number: 17, name: 'Jesper Fast', position: 'RW', age: 27, teamId: 19 },
  { number: 40, name: 'Alexandar Georgiev', position: 'G', age: 22, teamId: 19 },
  { number: 43, name: 'Libor Hajek', position: 'D', age: 20, teamId: 19 },
  { number: 21, name: 'Brett Howden', position: 'C', age: 20, teamId: 19 },
  { number: 20, name: 'Chris Kreider', position: 'C', age: 27, teamId: 19 },
  { number: 48, name: 'Brendan Lemieux', position: 'LW', age: 22, teamId: 19 },
  { number: 30, name: 'Henrik Lundqvist', position: 'G', age: 36, teamId: 19 },
  { number: 90, name: 'Vladislav Namestnikov', position: 'C', age: 26, teamId: 19 },
  { number: 24, name: 'Boo Nieves', position: 'C', age: 25, teamId: 19 },
  { number: 44, name: 'Neal Pionk', position: 'D', age: 23, teamId: 19 },
  { number: 22, name: 'Kevin Shattenkirk', position: 'D', age: 30, teamId: 19 },
  { number: 76, name: 'Brady Skjei', position: 'D', age: 24, teamId: 19 },
  { number: 42, name: 'Brendan Smith', position: 'D', age: 29, teamId: 19 },
  { number: 18, name: 'Marc Staal', position: 'D', age: 32, teamId: 19 },
  { number: 16, name: 'Ryan Strome', position: 'C', age: 25, teamId: 19 },
  { number: 26, name: 'Jimmy Vesey', position: 'LW', age: 25, teamId: 19 },
  { number: 93, name: 'Mika Zibanejad', position: 'C', age: 25, teamId: 19 },
];

module.exports = playersData;