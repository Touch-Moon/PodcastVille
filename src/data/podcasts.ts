import type { Podcast } from '@/types';

export const topShows: Podcast[] = [
  { id: 'the-daily', title: 'The Daily', author: 'The New York Times', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'crime-junkie', title: 'Crime Junkie', author: 'audiochuck', artwork: '/images/artwork/crime-junkie.jpg', category: 'True Crime' },
  { id: 'joe-rogan', title: 'The Joe Rogan Experience', author: 'Joe Rogan', artwork: '/images/artwork/the-joe-rogan-experience.jpg', category: 'Comedy', isExplicit: true },
  { id: 'dateline-nbc', title: 'Dateline NBC', author: 'NBC News', artwork: '/images/artwork/dateline-nbc.jpg', category: 'True Crime' },
  { id: 'pod-save-america', title: 'Pod Save America', author: 'Crooked Media', artwork: '/images/artwork/pod-save-america.jpg', category: 'Politics' },
  { id: 'stuff-you-should-know', title: 'Stuff You Should Know', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'call-her-daddy', title: 'Call Her Daddy', author: 'Alex Cooper', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'smartless', title: 'SmartLess', author: 'Jason Bateman, Sean Hayes, Will Arnett', artwork: '/images/artwork/smartless.jpg', category: 'Comedy', isExplicit: true },
  { id: 'this-american-life', title: 'This American Life', author: 'This American Life', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'hidden-brain', title: 'Hidden Brain', author: 'Hidden Brain Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Science' },
];

export const newShows: Podcast[] = [
  { id: 'what-i-survived', title: 'What I Survived', author: 'audiochuck', artwork: '/images/artwork/what-i-survived.jpg', category: 'True Crime' },
  { id: 'attention-lab', title: 'Attention Lab', author: 'Pushkin Industries', artwork: '/images/artwork/attention-lab.png', category: 'Science' },
  { id: 'are-you-captain-purple', title: 'Are You Captain Purple?', author: 'iHeart Podcasts', artwork: '/images/artwork/are-you-captain-purple.jpg', category: 'Comedy' },
  { id: 'we-blame-roseanne', title: 'We Blame Roseanne', author: 'ABC Audio', artwork: '/images/artwork/we-blame-roseanne.jpg', category: 'TV & Film' },
  { id: 'bloodline-banter', title: 'Bloodline Banter', author: 'Independent', artwork: '/images/artwork/bloodline-banter.png', category: 'True Crime' },
  { id: 'boys-and-girls', title: 'Boys and Girls', author: 'iHeart Podcasts', artwork: '/images/artwork/boys-and-girls.jpg', category: 'Society & Culture' },
  { id: 'frozen-files', title: 'Frozen Files', author: 'Independent', artwork: '/images/artwork/frozen-files.jpg', category: 'True Crime', isExplicit: true },
  { id: 'the-final-hours', title: 'The Final Hours with Sarah Turney', author: 'Sarah Turney', artwork: '/images/artwork/the-final-hours.jpg', category: 'True Crime' },
  { id: 'narco-warriors', title: 'Narco Warriors', author: 'Independent', artwork: '/images/artwork/narco-warriors.jpg', category: 'True Crime' },
  { id: 'safe-to-drink', title: 'Safe to Drink', author: 'Audible Originals', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Science' },
  { id: 'hard-drive', title: 'Hard Drive', author: 'Independent', artwork: '/images/artwork/hard-drive.jpg', category: 'Technology' },
  { id: 'always-here', title: 'Always Here', author: 'Independent', artwork: '/images/artwork/always-here.jpg', category: 'Society & Culture' },
  { id: 'table-for-four', title: 'Table for Four', author: 'Independent', artwork: '/images/artwork/table-for-four.jpg', category: 'Society & Culture' },
  { id: 'betrayal-season-5', title: 'Betrayal Season 5', author: 'ABC Audio', artwork: '/images/artwork/betrayal-season-5.jpg', category: 'True Crime', isExplicit: true },
  { id: 'love-trapped', title: 'Love Trapped', author: 'Independent', artwork: '/images/artwork/love-trapped.jpg', category: 'True Crime' },
];

export const topTrueCrime: Podcast[] = [
  { id: 'crime-junkie', title: 'Crime Junkie', author: 'audiochuck', artwork: '/images/artwork/crime-junkie.jpg', category: 'True Crime' },
  { id: 'dateline-nbc', title: 'Dateline NBC', author: 'NBC News', artwork: '/images/artwork/dateline-nbc.jpg', category: 'True Crime' },
  { id: 'morbid', title: 'Morbid', author: 'audiochuck', artwork: '/images/artwork/morbid.jpg', category: 'True Crime', isExplicit: true },
  { id: 'sword-and-scale', title: 'Sword and Scale', author: 'Incongruity', artwork: '/images/artwork/sword-and-scale.jpg', category: 'True Crime', isExplicit: true },
  { id: 'american-criminal', title: 'American Criminal', author: 'Campside Media', artwork: '/images/artwork/american-criminal.jpg', category: 'True Crime' },
  { id: 'they-walk-among-us', title: 'They Walk Among Us', author: 'Benjamin Fitton', artwork: '/images/artwork/they-walk-among-us.jpg', category: 'True Crime', isExplicit: true },
];

export const topComedy: Podcast[] = [
  { id: 'joe-rogan', title: 'The Joe Rogan Experience', author: 'Joe Rogan', artwork: '/images/artwork/the-joe-rogan-experience.jpg', category: 'Comedy', isExplicit: true },
  { id: 'smartless', title: 'SmartLess', author: 'Jason Bateman, Sean Hayes, Will Arnett', artwork: '/images/artwork/smartless.jpg', category: 'Comedy', isExplicit: true },
  { id: 'armchair-expert', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Comedy', isExplicit: true },
  { id: 'giggly-squad', title: 'Giggly Squad', author: 'Hannah Berner & Paige DeSorbo', artwork: '/images/artwork/giggly-squad.jpg', category: 'Comedy', isExplicit: true },
  { id: 'good-hang-amy', title: 'Good Hang with Amy Poehler', author: 'Amy Poehler', artwork: '/images/artwork/good-hang-amy-poehler.jpg', category: 'Comedy' },
  { id: 'wait-wait', title: "Wait Wait... Don't Tell Me!", author: 'NPR', artwork: '/images/artwork/wait-wait-dont-tell-me.jpg', category: 'Comedy' },
];

export const topSeries: Podcast[] = [
  { id: 'intrigue', title: 'Intrigue', author: 'BBC World Service', artwork: '/images/artwork/intrigue.jpg', category: 'Society & Culture' },
  { id: 'the-sixth-bureau', title: 'The Sixth Bureau', author: 'Independent', artwork: '/images/artwork/the-sixth-bureau.jpg', category: 'True Crime', isExplicit: true },
  { id: 'burden-of-guilt', title: 'Burden of Guilt', author: 'Independent', artwork: '/images/artwork/burden-of-guilt.jpg', category: 'True Crime', isExplicit: true },
  { id: 'the-binge-crimes', title: 'The Binge: Crimes', author: 'Exactly Right', artwork: '/images/artwork/the-binge-crimes.png', category: 'True Crime', isExplicit: true },
  { id: 'trace-of-suspicion', title: 'Trace of Suspicion', author: 'Independent', artwork: '/images/artwork/trace-of-suspicion.jpg', category: 'True Crime' },
  { id: 'murder-at-the-u', title: 'Murder at the U', author: 'Independent', artwork: '/images/artwork/murder-at-the-u.jpg', category: 'True Crime' },
];

export const newSeasonsShows: Podcast[] = [
  { id: 'betrayal-season-5', title: 'Betrayal Season 5', author: 'ABC Audio', artwork: '/images/artwork/betrayal-season-5.jpg', category: 'True Crime', isExplicit: true },
  { id: 'frozen-files', title: 'Frozen Files', author: 'Independent', artwork: '/images/artwork/frozen-files.jpg', category: 'True Crime', isExplicit: true },
  { id: 'dateline-originals', title: 'Dateline Originals', author: 'NBC News', artwork: '/images/artwork/dateline-originals.jpg', category: 'True Crime' },
  { id: 'love-trapped-s2', title: 'Love Trapped', author: 'Independent', artwork: '/images/artwork/love-trapped.jpg', category: 'True Crime' },
  { id: 'intrigue-s3', title: 'Intrigue', author: 'BBC World Service', artwork: '/images/artwork/intrigue.jpg', category: 'Society & Culture' },
  { id: 'the-secret-world-of-roald-dahl', title: 'The Secret World of Roald Dahl', author: "Somethin' Else", artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Fiction' },
];

export const topSocietyCultureShows: Podcast[] = [
  { id: 'this-american-life-sc', title: 'This American Life', author: 'This American Life', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'hidden-brain-sc', title: 'Hidden Brain', author: 'Hidden Brain Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Science' },
  { id: 'stuff-you-should-know-sc', title: 'Stuff You Should Know', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'the-rest-is-entertainment', title: 'The Rest Is Entertainment', author: 'Goalhanger Podcasts', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Society & Culture' },
  { id: 'armchair-expert-sc', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'how-to-with-mike-pesca', title: 'How To! with Charles Duhigg', author: 'Slate', artwork: '/images/artwork/how-to-with-mike-pesca.jpg', category: 'Society & Culture' },
];

export const globalHitsShows: Podcast[] = [
  { id: 'no-such-thing-as-a-fish', title: 'No Such Thing as a Fish', author: 'No Such Thing as a Fish', artwork: '/images/artwork/no-such-thing-as-a-fish.png', category: 'Comedy' },
  { id: 'the-ancients', title: 'The Ancients', author: 'History Hit', artwork: '/images/artwork/the-ancients.jpg', category: 'History' },
  { id: 'they-walk-among-us-g', title: 'They Walk Among Us', author: 'Benjamin Fitton', artwork: '/images/artwork/they-walk-among-us.jpg', category: 'True Crime', isExplicit: true },
  { id: 'determined-society', title: 'A Determined Society', author: 'Independent', artwork: '/images/artwork/determined-society.jpg', category: 'Society & Culture' },
  { id: 'museum-of-pop-culture', title: 'Museum of Pop Culture', author: 'MoPOP', artwork: '/images/artwork/museum-of-pop-culture.jpg', category: 'Arts' },
  { id: 'the-sixth-bureau-g', title: 'The Sixth Bureau', author: 'Independent', artwork: '/images/artwork/the-sixth-bureau.jpg', category: 'True Crime', isExplicit: true },
];

export const topNews: Podcast[] = [
  { id: 'the-daily-news', title: 'The Daily', author: 'The New York Times', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'pod-save-america-news', title: 'Pod Save America', author: 'Crooked Media', artwork: '/images/artwork/pod-save-america.jpg', category: 'News' },
  { id: 'the-ezra-klein-show-news', title: 'The Ezra Klein Show', author: 'The New York Times', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'News' },
  { id: '20-20-news', title: '20/20', author: 'ABC News', artwork: '/images/artwork/20-20.jpg', category: 'News' },
  { id: 'adults-in-the-room-news', title: 'Adults in the Room', author: 'Independent', artwork: '/images/artwork/adults-in-the-room.jpg', category: 'News' },
  { id: 'the-shawn-ryan-show-news', title: 'The Shawn Ryan Show', author: 'Shawn Ryan', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'News' },
];

export const essentialListens: Podcast[] = [
  { id: 'call-her-daddy-el', title: 'Call Her Daddy', author: 'Alex Cooper', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'this-american-life-el', title: 'This American Life', author: 'This American Life', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'hidden-brain-el', title: 'Hidden Brain', author: 'Hidden Brain Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Science' },
  { id: 'armchair-expert-el', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'smartless-el', title: 'SmartLess', author: 'Jason Bateman, Sean Hayes, Will Arnett', artwork: '/images/artwork/smartless.jpg', category: 'Comedy', isExplicit: true },
  { id: 'stuff-you-should-know-el', title: 'Stuff You Should Know', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'the-rest-is-entertainment-el', title: 'The Rest Is Entertainment', author: 'Goalhanger Podcasts', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Society & Culture' },
  { id: 'wait-wait-el', title: "Wait Wait... Don't Tell Me!", author: 'NPR', artwork: '/images/artwork/wait-wait-dont-tell-me.jpg', category: 'Comedy' },
];

export const topSubscriberShows: Podcast[] = [
  { id: 'the-daily-sub', title: 'The Daily', author: 'The New York Times', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'dateline-nbc-sub', title: 'Dateline NBC', author: 'NBC News', artwork: '/images/artwork/dateline-nbc.jpg', category: 'True Crime' },
  { id: 'this-american-life-sub', title: 'This American Life', author: 'This American Life', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'pod-save-america-sub', title: 'Pod Save America', author: 'Crooked Media', artwork: '/images/artwork/pod-save-america.jpg', category: 'Politics' },
  { id: 'hidden-brain-sub', title: 'Hidden Brain', author: 'Hidden Brain Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Science' },
  { id: 'the-rest-is-entertainment-sub', title: 'The Rest Is Entertainment', author: 'Goalhanger Podcasts', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Society & Culture' },
  { id: 'armchair-expert-sub', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'stuff-you-should-know-sub', title: 'Stuff You Should Know', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
];

// ─── Top Charts (ordered rank list) ────────────────────────────────────────

export interface ChartPodcast extends Podcast {
  chartRank: number;
}

export const topChartsAll: ChartPodcast[] = [
  { chartRank: 1,  id: 'the-daily',           title: 'The Daily',                       author: 'The New York Times',              artwork: '/images/artwork/the-daily.jpg',                    category: 'News' },
  { chartRank: 2,  id: 'crime-junkie',         title: 'Crime Junkie',                    author: 'audiochuck',                      artwork: '/images/artwork/crime-junkie.jpg',                  category: 'True Crime' },
  { chartRank: 3,  id: 'joe-rogan',            title: 'The Joe Rogan Experience',         author: 'Joe Rogan',                       artwork: '/images/artwork/the-joe-rogan-experience.jpg',      category: 'Comedy', isExplicit: true },
  { chartRank: 4,  id: 'call-her-daddy',       title: 'Call Her Daddy',                  author: 'Alex Cooper',                     artwork: '/images/artwork/call-her-daddy.jpg',                category: 'Society & Culture', isExplicit: true },
  { chartRank: 5,  id: 'dateline-nbc',         title: 'Dateline NBC',                    author: 'NBC News',                        artwork: '/images/artwork/dateline-nbc.jpg',                  category: 'True Crime' },
  { chartRank: 6,  id: 'smartless',            title: 'SmartLess',                       author: 'Jason Bateman, Sean Hayes, Will Arnett', artwork: '/images/artwork/smartless.jpg',             category: 'Comedy', isExplicit: true },
  { chartRank: 7,  id: 'morbid',               title: 'Morbid',                          author: 'Morbid Network | Wondery',        artwork: '/images/artwork/morbid.jpg',                        category: 'True Crime', isExplicit: true },
  { chartRank: 8,  id: 'pod-save-america',     title: 'Pod Save America',                author: 'Crooked Media',                   artwork: '/images/artwork/pod-save-america.jpg',             category: 'News' },
  { chartRank: 9,  id: 'armchair-expert',      title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard',                   artwork: '/images/artwork/armchair-expert.jpg',              category: 'Society & Culture', isExplicit: true },
  { chartRank: 10, id: 'stuff-you-should-know', title: 'Stuff You Should Know',           author: 'iHeart Podcasts',                artwork: '/images/artwork/stuff-you-should-know.jpg',        category: 'Education' },
  { chartRank: 11, id: 'this-american-life',   title: 'This American Life',              author: 'This American Life',              artwork: '/images/artwork/this-american-life.png',           category: 'Society & Culture' },
  { chartRank: 12, id: 'hidden-brain',         title: 'Hidden Brain',                    author: 'Hidden Brain Media',              artwork: '/images/artwork/hidden-brain.jpg',                  category: 'Science' },
  { chartRank: 13, id: 'sword-and-scale',      title: 'Sword and Scale',                 author: 'Incongruity Media',               artwork: '/images/artwork/sword-and-scale.jpg',              category: 'True Crime', isExplicit: true },
  { chartRank: 14, id: 'the-rest-is-entertainment', title: 'The Rest Is Entertainment',  author: 'Goalhanger Podcasts',             artwork: '/images/artwork/the-rest-is-entertainment.jpg',    category: 'Society & Culture' },
  { chartRank: 15, id: 'american-criminal',    title: 'American Criminal',               author: 'Campside Media',                  artwork: '/images/artwork/american-criminal.jpg',            category: 'True Crime' },
  { chartRank: 16, id: 'giggly-squad',         title: 'Giggly Squad',                    author: 'Hannah Berner & Paige DeSorbo',   artwork: '/images/artwork/giggly-squad.jpg',                 category: 'Comedy', isExplicit: true },
  { chartRank: 17, id: 'the-sixth-bureau',      title: 'The Sixth Bureau',                author: 'Independent',                     artwork: '/images/artwork/the-sixth-bureau.jpg',             category: 'True Crime', isExplicit: true },
  { chartRank: 18, id: 'they-walk-among-us',   title: 'They Walk Among Us',              author: 'Benjamin Fitton',                 artwork: '/images/artwork/they-walk-among-us.jpg',           category: 'True Crime', isExplicit: true },
  { chartRank: 19, id: 'wait-wait',            title: "Wait Wait… Don't Tell Me!",       author: 'NPR',                             artwork: '/images/artwork/wait-wait-dont-tell-me.jpg',       category: 'Comedy' },
  { chartRank: 20, id: 'intrigue',             title: 'Intrigue',                        author: 'BBC World Service',               artwork: '/images/artwork/intrigue.jpg',                      category: 'Society & Culture' },
  { chartRank: 21, id: 'good-hang-amy',        title: 'Good Hang with Amy Poehler',      author: 'Amy Poehler',                     artwork: '/images/artwork/good-hang-amy-poehler.jpg',        category: 'Comedy' },
  { chartRank: 22, id: 'dateline-originals',   title: 'Dateline Originals',              author: 'NBC News',                        artwork: '/images/artwork/dateline-originals.jpg',           category: 'True Crime' },
  { chartRank: 23, id: 'determined-society',   title: 'A Determined Society',            author: 'Independent',                     artwork: '/images/artwork/determined-society.jpg',           category: 'Society & Culture' },
  { chartRank: 24, id: 'the-ancients',         title: 'The Ancients',                    author: 'History Hit',                     artwork: '/images/artwork/the-ancients.jpg',                  category: 'History' },
  { chartRank: 25, id: 'no-such-thing-as-a-fish', title: 'No Such Thing as a Fish',      author: 'No Such Thing as a Fish',         artwork: '/images/artwork/no-such-thing-as-a-fish.png',      category: 'Comedy' },
  { chartRank: 26, id: 'murder-at-the-u',      title: 'Murder at the U',                 author: 'Independent',                     artwork: '/images/artwork/murder-at-the-u.jpg',              category: 'True Crime' },
  { chartRank: 27, id: 'the-binge-crimes',     title: 'The Binge: Crimes',               author: 'Exactly Right',                   artwork: '/images/artwork/the-binge-crimes.png',             category: 'True Crime', isExplicit: true },
  { chartRank: 28, id: 'safe-to-drink',        title: 'Safe to Drink',                   author: 'Audible Originals',               artwork: '/images/artwork/safe-to-drink.jpg',                category: 'Science' },
  { chartRank: 29, id: 'how-to-with-mike-pesca', title: 'How To! with Charles Duhigg',   author: 'Slate',                           artwork: '/images/artwork/how-to-with-mike-pesca.jpg',       category: 'Society & Culture' },
  { chartRank: 30, id: 'hard-drive',           title: 'Hard Drive',                      author: 'Independent',                     artwork: '/images/artwork/hard-drive.jpg',                   category: 'Technology' },
];

const _allPodcasts = [
  ...topShows, ...newShows, ...topTrueCrime, ...topComedy, ...topSeries,
  ...newSeasonsShows, ...topSocietyCultureShows, ...globalHitsShows,
  ...essentialListens, ...topSubscriberShows,
];

export function getPodcastById(id: string): Podcast | undefined {
  const direct = _allPodcasts.find(p => p.id === id);
  if (direct) return direct;
  const normalized = id.replace(/-(el|sub|sc|g|s2|s3)$/, '');
  return _allPodcasts.find(p => p.id === normalized || p.id.replace(/-(el|sub|sc|g|s2|s3)$/, '') === normalized);
}

export function getAllPodcastIds(): string[] {
  return [...new Set(_allPodcasts.map(p => p.id))];
}
