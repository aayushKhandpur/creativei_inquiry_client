import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuoteProvider {

  private quotes = [
    {
    "quote" : "Life isn’t about getting and having, it’s about giving and being.",
    "name": "Kevin Kruse"
    },
    {
    "quote" : "Whatever the mind of man can conceive and believe, it can achieve.", 
    "name" : "Napoleon Hill"
    },
    {
    "quote" : "Strive not to be a success, but rather to be of value.", 
    "name" : "Albert Einstein"
    },
    {
    "quote" : "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
    "name" : "Robert Frost"
    },
    {
    "quote" : "I attribute my success to this: I never gave or took any excuse.", 
    "name" : "Florence Nightingale"
    },
    {
    "quote" : "You miss 100% of the shots you don’t take.", 
    "name" : "Wayne Gretzky"
    },
    {
    "quote" : "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", 
    "name" : "Michael Jordan"
    },
    {
    "quote" : "The most difficult thing is the decision to act, the rest is merely tenacity.", 
    "name" : "Amelia Earhart"
    },
    {
    "quote" : "Every strike brings me closer to the next home run.", 
    "name" : "Babe Ruth"
    },
    {
    "quote" : "Definiteness of purpose is the starting point of all achievement.", 
    "name" : "W. Clement Stone"
    },
    {
    "quote" : "We must balance conspicuous consumption with conscious capitalism.", 
    "name" : "Kevin Kruse"
    },
    {
    "quote" : "Life is what happens to you while you’re busy making other plans.", 
    "name" : "John Lennon"
    },
    {
    "quote" : "We become what we think about.", 
    "name" : "Earl Nightingale"
    },
    {
    "quote" : "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", 
    "name" : "Mark Twain"
    },
    {
    "quote" : "Life is 10% what happens to me and 90% of how I react to it.", 
    "name" : "Charles Swindoll"
    },
    {
    "quote" : "The most common way people give up their power is by thinking they don’t have any.", 
    "name" : "Alice Walker"
    },
    {
    "quote" : "The mind is everything. What you think you become.", 
    "name" : "Buddha"
    },
    {
    "quote" : "The best time to plant a tree was 20 years ago. The second best time is now.", 
    "name" : "Chinese Proverb"
    },
    {
    "quote" : "An unexamined life is not worth living.", 
    "name" : "Socrates"
    },
    {
    "quote" : "Eighty percent of success is showing up.", 
    "name" : "Woody Allen"
    },
    {
    "quote" : "Your time is limited, so don’t waste it living someone else’s life.", 
    "name" : "Steve Jobs"
    },
    {
    "quote" : "Winning isn’t everything, but wanting to win is.", 
    "name" : "Vince Lombardi"
    },
    {
    "quote" : "I am not a product of my circumstances. I am a product of my decisions.", 
    "name" : "Stephen Covey"
    },
    {
    "quote" : "Every child is an artist.  The problem is how to remain an artist once he grows up.", 
    "name" : "Pablo Picasso"
    },
    {
    "quote" : "You can never cross the ocean until you have the courage to lose sight of the shore.", 
    "name" : "Christopher Columbus"
    },
    {
    "quote" : "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", 
    "name" : "Maya Angelou"
    },
    {
    "quote" : "Either you run the day, or the day runs you.", 
    "name" : "Jim Rohn"
    },
    {
    "quote" : "Whether you think you can or you think you can’t, you’re right.", 
    "name" : "Henry Ford"
    },
    {
    "quote" : "The two most important days in your life are the day you are born and the day you find out why.", 
    "name" : "Mark Twain"
    },
    {
    "quote" : "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", 
    "name" : "Johann Wolfgang von Goethe"
    },
    {
    "quote" : "The best revenge is massive success.", 
    "name" : "Frank Sinatra"
    },
    {
    "quote" : "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", 
    "name" : "Zig Ziglar"
    },
    {
    "quote" : "Life shrinks or expands in proportion to one’s courage.", 
    "name" : "Anais Nin"
    },
    {
    "quote" : "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", 
    "name" : "Vincent Van Gogh"
    },
    {
    "quote" : "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", 
    "name" : "Aristotle"
    },
    {
    "quote" : "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", 
    "name" : "Jesus"
    },
    {
    "quote" : "The only person you are destined to become is the person you decide to be.", 
    "name" : "Ralph Waldo Emerson"
    },
    {
    "quote" : "Go confidently in the direction of your dreams.  Live the life you have imagined.", 
    "name" : "Henry David Thoreau"
    },
    {
    "quote" : "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", 
    "name" : "Erma Bombeck"
    },
    {
    "quote" : "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", 
    "name" : "Booker T. Washington"
    },
    {
    "quote" : "Certain things catch your eye, but pursue only those that capture the heart.", 
    "name" : "Ancient Indian Proverb"
    },
    {
    "quote" : "Believe you can and you’re halfway there.", 
    "name" : "Theodore Roosevelt"
    },
    {
    "quote" : "Everything you’ve ever wanted is on the other side of fear.", 
    "name" : "George Addair"
    },
    {
    "quote" : "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", 
    "name" : "Plato"
    },
    {
    "quote" : "Teach thy tongue to say, “I do not know,” and thous shalt progress.", 
    "name" : "Maimonides"
    },
    {
    "quote" : "Start where you are. Use what you have.  Do what you can.", 
    "name" : "Arthur Ashe"
    },
    {
    "quote" : "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", 
    "name" : "John Lennon"
    },
    {
    "quote" : "Fall seven times and stand up eight.", 
    "name" : "Japanese Proverb"
    },
    {
    "quote" : "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", 
    "name" : "Helen Keller"
    },
    {
    "quote" : "Everything has beauty, but not everyone can see.", 
    "name" : "Confucius"
    },
    {
    "quote" : "How wonderful it is that nobody need wait a single moment before starting to improve the world.", 
    "name" : "Anne Frank"
    },
    {
    "quote" : "When I let go of what I am, I become what I might be.", 
    "name" : "Lao Tzu"
    },
    {
    "quote" : "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", 
    "name" : "Maya Angelou"
    },
    {
    "quote" : "Happiness is not something readymade.  It comes from your own actions.", 
    "name" : "Dalai Lama"
    },
    {
    "quote" : "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", 
    "name" : "Sheryl Sandberg"
    },
    {
    "quote" : "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", 
    "name" : "Aristotle"
    },
    {
    "quote" : "If the wind will not serve, take to the oars.", 
    "name" : "Latin Proverb"
    },
    {
    "quote" : "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", 
    "name" : "Unknown"
    },
    {
    "quote" : "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", 
    "name" : "Marie Curie"
    },
    {
    "quote" : "Too many of us are not living our dreams because we are living our fears.", 
    "name" : "Les Brown"
    },
    {
    "quote" : "Challenges are what make life interesting and overcoming them is what makes life meaningful.", 
    "name" : "Joshua J. Marine"
    },
    {
    "quote" : "If you want to lift yourself up, lift up someone else.", 
    "name" : "Booker T. Washington"
    },
    {
    "quote" : "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", 
    "name" : "Leonardo da Vinci"
    },
    {
    "quote" : "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", 
    "name" : "Jamie Paolinetti"
    },
    {
    "quote" : "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", 
    "name" : "Erica Jong"
    },
    {
    "quote" : "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", 
    "name" : "Bob Dylan"
    },
    {
    "quote" : "I didn’t fail the test. I just found 100 ways to do it wrong.", 
    "name" : "Benjamin Franklin"
    },
    {
    "quote" : "In order to succeed, your desire for success should be greater than your fear of failure.", 
    "name" : "Bill Cosby"
    },
    {
    "quote" : "A person who never made a mistake never tried anything new.", 
    "name" : "Albert Einstein"
    },
    {
    "quote" : "The person who says it cannot be done should not interrupt the person who is doing it.", 
    "name" : "Chinese Proverb"
    },
    {
    "quote" : "There are no traffic jams along the extra mile.", 
    "name" : "Roger Staubach"
    },
    {
    "quote" : "It is never too late to be what you might have been.", 
    "name" : "George Eliot"
    },
    {
    "quote" : "You become what you believe.", 
    "name" : "Oprah Winfrey"
    },
    {
    "quote" : "I would rather die of passion than of boredom.", 
    "name" : "Vincent van Gogh"
    },
    {
    "quote" : "A truly rich man is one whose children run into his arms when his hands are empty.", 
    "name" : "Unknown"
    },
    {
    "quote" : "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", 
    "name" : "Ann Landers"
    },
    {
    "quote" : "If you want your children to turn out well, spend twice as much time with them, and half as much money.", 
    "name" : "Abigail Van Buren"
    },
    {
    "quote" : "Build your own dreams, or someone else will hire you to build theirs.", 
    "name" : "Farrah Gray"
    },
    {
    "quote" : "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", 
    "name" : "Jesse Owens"
    },
    {
    "quote" : "Education costs money.  But then so does ignorance.", 
    "name" : "Sir Claus Moser"
    },
    {
    "quote" : "I have learned over the years that when one’s mind is made up, this diminishes fear.", 
    "name" : "Rosa Parks"
    },
    {
    "quote" : "It does not matter how slowly you go as long as you do not stop.", 
    "name" : "Confucius"
    },
    {
    "quote" : "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", 
    "name" : "Oprah Winfrey"
    },
    {
    "quote" : "Remember that not getting what you want is sometimes a wonderful stroke of luck.", 
    "name" : "Dalai Lama"
    },
    {
    "quote" : "You can’t use up creativity.  The more you use, the more you have.", 
    "name" : "Maya Angelou"
    },
    {
    "quote" : "Dream big and dare to fail.", 
    "name" : "Norman Vaughan"
    },
    {
    "quote" : "Our lives begin to end the day we become silent about things that matter.", 
    "name" : "Martin Luther King Jr."
    },
    {
    "quote" : "Do what you can, where you are, with what you have.", 
    "name" : "Teddy Roosevelt"
    },
    {
    "quote" : "If you do what you’ve always done, you’ll get what you’ve always gotten.", 
    "name" : "Tony Robbins"
    },
    {
    "quote" : "Dreaming, after all, is a form of planning.", 
    "name" : "Gloria Steinem"
    },
    {
    "quote" : "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", 
    "name" : "Mae Jemison"
    },
    {
    "quote" : "You may be disappointed if you fail, but you are doomed if you don’t try.", 
    "name" : "Beverly Sills"
    },
    {
    "quote" : "Remember no one can make you feel inferior without your consent.", 
    "name" : "Eleanor Roosevelt"
    },
    {
    "quote" : "Life is what we make it, always has been, always will be.", 
    "name" : "Grandma Moses"
    },
    {
    "quote" : "The question isn’t who is going to let me; it’s who is going to stop me.", 
    "name" : "Ayn Rand"
    },
    {
    "quote" : "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", 
    "name" : "Henry Ford"
    },
    {
    "quote" : "It’s not the years in your life that count. It’s the life in your years.", 
    "name" : "Abraham Lincoln"
    },
    {
    "quote" : "Change your thoughts and you change your world.", 
    "name" : "Norman Vincent Peale"
    },
    {
    "quote" : "Either write something worth reading or do something worth writing.", 
    "name" : "Benjamin Franklin"
    },
    {
    "quote" : "Nothing is impossible, the word itself says, “I’m possible!”", 
    "name" : "–Audrey Hepburn"
    },
    {
    "quote" : "The only way to do great work is to love what you do.", 
    "name" : "Steve Jobs"
    },
    {
    "quote" : "If you can dream it, you can achieve it.", 
    "name" : "Zig Ziglar"
    }
  ]

  constructor(public http: HttpClient) {
    console.log('Hello QuoteProvider Provider');
  }

  getQuote(){
    return this.quotes[Math.floor(Math.random()*(this.quotes.length-1))];
  }

}
