import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Le nom est requis'],
      trim: true,
      maxlength: [100, 'Nom trop long'],
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [200, 'Sujet trop long'],
      default: 'Nouveau message',
    },
    message: {
      type: String,
      required: [true, 'Le message est requis'],
      trim: true,
      maxlength: [2000, 'Message trop long'],
    },
    lang: {
      type: String,
      enum: ['fr', 'en'],
      default: 'fr',
    },
    ip: String,
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
