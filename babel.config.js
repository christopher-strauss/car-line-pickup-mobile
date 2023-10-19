module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //TODO:  reanimated was throwing an error so I added this based on this article
    //https://stackoverflow.com/questions/72927722/export-namespace-should-be-first-transformed-by-babel-plugin-proposal-export-n
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv']
  ],
};