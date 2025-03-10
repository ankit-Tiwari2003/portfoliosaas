// portfolio-nextjs/models/User.ts
import mongoose from 'mongoose';

// Define the user interface
export interface IUser {
  email: string;
  name: string;
  image?: string;
  portfolioData?: {
    bio?: string;
    skills?: string[];
    projects?: Array<{
      title: string;
      description: string;
      imageUrl?: string;
      link?: string;
    }>;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Define the User schema
const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: String,
    portfolioData: {
      bio: String,
      skills: [String],
      projects: [
        {
          title: String,
          description: String,
          imageUrl: String,
          link: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Use existing model or create a new one
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);