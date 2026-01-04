// Library Item URL Mapping
// Maps library item IDs to their HTML file paths

export const libraryFileMap: { [key: string]: string } = {
  'l1': '/library/library-l1.html',  // Letter to Alasinga Perumal
  'l2': '/library/library-l2.html',  // Karma-Yoga
  'l3': '/library/library-l3.html',  // Bhakti-Yoga
  'l4': '/library/library-l4.html',  // Raja-Yoga
  'l5': '/library/library-l5.html',  // Addresses on Bhakti-Yoga
  'l6': '/library/library-l6.html',  // On Caste
};

// Get the file path for a library item
export const getLibraryFilePath = (itemId: string): string => {
  return libraryFileMap[itemId] || '/library';
};
