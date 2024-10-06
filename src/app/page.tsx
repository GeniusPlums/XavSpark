import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BriefcaseIcon, MenuIcon } from "lucide-react"

export default function FreelanceApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BriefcaseIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">AdamaneHub</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Find Work</Button>
            <Button variant="ghost">My Jobs</Button>
            <Button variant="ghost">Messages</Button>
            <Button variant="ghost">Profile</Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Filters</h2>
              <Input type="text" placeholder="Search jobs..." />
            </div>
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="font-medium mb-2">Experience Level</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hourly Rate</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="text-sm text-muted-foreground mt-1">$50/hour</div>
            </div>
          </aside>
          <section className="flex-grow space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Featured Jobs</h2>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest-paid">Highest Paid</SelectItem>
                  <SelectItem value="most-relevant">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {[1, 2, 3].map((job) => (
              <div key={job} className="border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Senior React Developer</h3>
                    <p className="text-muted-foreground">XYZ Tech Solutions</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$50-$70/hour</div>
                    <div className="text-sm text-muted-foreground">Posted 2 days ago</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  We&apos;re looking for an experienced React developer to join our team and work on exciting projects...
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm">React</Button>
                  <Button variant="secondary" size="sm">TypeScript</Button>
                  <Button variant="secondary" size="sm">Node.js</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">30-40 hours/week</div>
                  <Button>Apply Now</Button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}