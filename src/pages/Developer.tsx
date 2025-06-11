import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter
} from "lucide-react"

export default function Developer() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">About the Developer</h1>
      
      <Card className="p-6 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img 
              src="/developer-photo.png" 
              alt="Developer" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-3">Muhammadali Botirov</h2>
            <p className="text-gray-600 mb-4">
              AI and Machine Learning Enthusiast | Full Stack Developer
            </p>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-600">
                A passionate developer with a keen interest in artificial intelligence and machine learning. 
                Currently focused on developing AI-powered solutions and exploring the intersection of technology and practical applications.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Contact & Social</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/botirov206/', '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://linkedin.com/in/muhammadali-botirov', '_blank')}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:your.botirovali206@gmail.com'}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/botirov206/', '_blank')}>
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://x.com/nah_iwould_win', '_blank')}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'React', 'TypeScript', 'Data Analysis', 'AI Development'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
