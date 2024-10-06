import React from 'react';
import { Search, User, Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const names = ["Alice Smith", "Bob Johnson", "Charlie Brown", "Diana Lee", "Ethan Davis", "Fiona Wilson", "George Taylor", "Hannah Moore"];
const prices = [25, 30, 40, 50, 60, 75, 80, 100];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const SkillHubComponent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-500">SkillHub</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Business solutions
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Explore
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Become a Seller
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Find the perfect freelance services for your business</h2>
            <div className="flex items-center max-w-md mx-auto">
              <Input className="rounded-r-none" placeholder="Search for any service..." />
              <Button className="rounded-l-none" type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle"].map((category) => (
                <Button key={category} variant="outline" className="h-auto py-4 justify-start">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Recently Viewed Gigs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((gig) => (
                <div key={gig} className="border rounded-lg overflow-hidden">
                  <img
                    alt="Gig thumbnail"
                    className="object-cover w-full h-48"
                    height="200"
                    src={`https://source.unsplash.com/random/300x200?sig=${gig}`}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">I will do something awesome for you</h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <User className="h-4 w-4 mr-1" />
                      <span>{getRandomElement(names)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Starting at</div>
                      <div className="font-semibold">${getRandomElement(prices)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillHubComponent;