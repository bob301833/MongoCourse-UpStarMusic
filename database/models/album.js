import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSolid: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
});

export default AlbumSchema;
