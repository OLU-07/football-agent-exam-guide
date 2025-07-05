const Footer = () => {
  return (
    <footer className="bg-fifa-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-fifa-gold to-fifa-light-blue rounded-lg flex items-center justify-center">
                <span className="text-fifa-navy font-bold text-lg">F</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">FIFA Agent</h3>
                <p className="text-sm text-white/70">Certification Prep</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              The world's leading FIFA agent certification preparation program, 
              trusted by thousands of successful agents worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-fifa-gold">Courses</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-fifa-gold transition-colors">FIFA Regulations</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Contract Law</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Transfer Mechanisms</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Ethics & Conduct</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Practice Exams</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-fifa-gold">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Study Materials</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Video Library</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-fifa-gold transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-fifa-gold">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>📧 support@fifaagentprep.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>🌍 Available Worldwide</li>
              <li>⏰ 24/7 Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 FIFA Agent Certification Prep. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-fifa-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-fifa-gold transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-fifa-gold transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;