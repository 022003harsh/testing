const { YoutubeTranscript } = require('youtube-transcript');

// Controller for fetching captions
const getCaptions = async (req, res) => {
    try {
        const { videoId } = req.query;
        if (!videoId) {
            return res.status(400).json({ error: 'The "videoId" parameter is required.' });
        }

        // Fetch transcript from YouTube
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        // Respond with the transcript
        res.status(200).json({
            youtubeId: videoId,
            transcript,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching captions.' });
    }
};

module.exports = { getCaptions };
