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
];

module.exports = playersData;