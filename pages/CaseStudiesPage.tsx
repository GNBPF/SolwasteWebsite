import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Factory, TrendingUp, Filter, Search, CheckCircle2, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

// Case Study Data
const caseStudiesData = [
  { sNo: 1, clientName: "Indira Gandhi Centre for Atomic Research", location: "Kalpakkam, Tamil Nadu", state: "Tamil Nadu", capacity: 1.0, wasteType: "MSW", status: "Installed" },
  { sNo: 2, clientName: "Aizwal Municipal Corporation", location: "Mizoram", state: "Mizoram", capacity: 1.0, wasteType: "MSW", status: "Installed" },
  { sNo: 3, clientName: "Assam Pollution Control Board", location: "Nagaon, Assam", state: "Assam", capacity: 0.5, wasteType: "MSW", status: "Installed" },
  { sNo: 4, clientName: "Sam Foundation for Eco friendly Environmental", location: "Chennai, TN", state: "Tamil Nadu", capacity: 0.1, wasteType: "MSW", status: "Installed" },
  { sNo: 5, clientName: "Kartarpur Land Port", location: "Punjab", state: "Punjab", capacity: 0.5, wasteType: "Port Waste", status: "Installed" },
  { sNo: 6, clientName: "Kartarpur Land Port", location: "Punjab", state: "Punjab", capacity: 0.5, wasteType: "MSW", status: "Installed" },
  { sNo: 7, clientName: "Adani SEZ, Mundra Port", location: "Gujarat", state: "Gujarat", capacity: 0.5, wasteType: "MSW", status: "Installed" },
  { sNo: 8, clientName: "Defence colony, Shankar Vihar", location: "New Delhi", state: "Delhi", capacity: 0.15, wasteType: "Institutional", status: "Installed" },
  { sNo: 9, clientName: "Don Boscho University, Guwahati", location: "Assam", state: "Assam", capacity: 0.15, wasteType: "Institutional", status: "Installed" },
  { sNo: 10, clientName: "Telangana Institute of Medical Science", location: "Hyderabad", state: "Telangana", capacity: 1.0, wasteType: "COVID Waste", status: "Installed" },
  { sNo: 11, clientName: "Kareem Nagar Municipality", location: "Hyderabad", state: "Telangana", capacity: 0.25, wasteType: "MSW", status: "Installed" },
  { sNo: 12, clientName: "Guntur Municipal Corporation", location: "Andhra Pradesh", state: "Andhra Pradesh", capacity: 0.25, wasteType: "MSW", status: "Installed" },
  { sNo: 13, clientName: "Kakinada Municipal Corporation", location: "Andhra Pradesh", state: "Andhra Pradesh", capacity: 0.25, wasteType: "MSW", status: "Installed" },
  { sNo: 14, clientName: "Department of Urban Development & Housing", location: "Tawang Valley, Arunachal Pradesh", state: "Arunachal Pradesh", capacity: 0.5, wasteType: "MSW", status: "Installed" },
  { sNo: 15, clientName: "Department of Urban Development & Housing", location: "Ziro Valley, Arunachal Pradesh", state: "Arunachal Pradesh", capacity: 0.5, wasteType: "MSW", status: "Installed" },
  { sNo: 16, clientName: "Numaligarh Refinery Limited", location: "Assam", state: "Assam", capacity: 0.15, wasteType: "Mixed Waste", status: "Installed" },
  { sNo: 17, clientName: "Indira Gandhi Centre for Atomic Research", location: "Kalpakkam, Tamil Nadu", state: "Tamil Nadu", capacity: 0.25, wasteType: "MSW", status: "To be Installed" },
  { sNo: 18, clientName: "55 Engineer Regiment, Indian Army", location: "Rajasthan", state: "Rajasthan", capacity: 0.25, wasteType: "MSW", status: "To be Installed" },
  { sNo: 19, clientName: "Tirupati Municipal Corporation", location: "Tirupati", state: "Andhra Pradesh", capacity: 1.0, wasteType: "MSW", status: "To be Installed" },
  { sNo: 20, clientName: "IndLab Equipment Pvt. Ltd.", location: "Bengaluru", state: "Karnataka", capacity: 1.0, wasteType: "Mixed Waste", status: "Installed" }
];

// India State Map Component (Simplified India Map with Markers)
const IndiaMap = ({ installations }) => {
  // Simplified state coordinates for visualization
  const stateCoordinates = {
    "Tamil Nadu": { x: 60, y: 75 },
    "Mizoram": { x: 85, y: 50 },
    "Assam": { x: 82, y: 45 },
    "Punjab": { x: 35, y: 20 },
    "Gujarat": { x: 25, y: 45 },
    "Delhi": { x: 40, y: 25 },
    "Telangana": { x: 55, y: 60 },
    "Andhra Pradesh": { x: 58, y: 65 },
    "Arunachal Pradesh": { x: 85, y: 35 },
    "Rajasthan": { x: 35, y: 35 },
    "Karnataka": { x: 52, y: 70 }
  };

  const [hoveredState, setHoveredState] = useState(null);

  // Count installations per state
  const stateInstallations = installations.reduce((acc, inst) => {
    const state = inst.state;
    if (!acc[state]) acc[state] = [];
    acc[state].push(inst);
    return acc;
  }, {});

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-moss/5 rounded-2xl border border-moss/20 overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Accurate India outline matching actual geography */}
        <path
          d="M 28 18 C 30 16 32 15 34 14 C 36 13 38 13 40 14 C 41 13 43 13 44 14 C 46 13 48 13 50 14 L 52 13 L 54 14 L 56 13 L 58 14 C 60 13 62 13 64 14 L 66 13 L 68 15 C 70 14 72 15 74 16 C 76 17 78 19 80 21 C 82 23 84 26 85 29 C 86 32 87 35 88 38 L 89 42 C 89.5 44 90 46 90 48 C 90 49 90 50 89.5 51 L 88 54 C 87 56 86 58 85 60 C 84 62 83 64 82 65 C 80 67 78 68 76 69 C 75 70 74 71 73 72 C 71 74 69 76 67 78 C 65 80 63 82 61 83.5 C 59 85 57 86 55 87 L 52 88 C 50 88.5 48 88.5 46 88 C 44 87.5 42 86.5 40 85 C 38 83.5 36 81.5 34.5 79 C 33 76.5 32 74 31 71 C 29.5 68 28.5 65 27.5 62 C 26.5 59 26 56 25.5 53 C 25 50 24.5 47 24.5 44 C 24.5 41 24.5 38 25 35 C 25.5 32 26 29 27 26 C 27.5 24 28 22 28.5 20 L 28 18 M 85 38 C 86 40 87 42 88 44 L 89 46 C 90 47 90.5 48 91 49 C 92 50 93 51 94 52 L 95 54 L 95 56 C 95 57 94.5 58 94 59 L 93 60 C 92 61 91 62 90 62.5 L 88 63 C 87 63 86 62.5 85.5 62 C 85 61 85 60 85 59 C 85 57 85.5 55 86 53 L 86 50 C 86 48 85.5 46 85 44 L 85 42 L 85 38"
          fill="#2C3E2C"
          fillOpacity="0.1"
          stroke="#2C3E2C"
          strokeWidth="0.5"
        />

        {/* Markers for each state */}
        {Object.entries(stateCoordinates).map(([state, coords]) => {
          const count = stateInstallations[state]?.length || 0;
          if (count === 0) return null;

          return (
            <g key={state}>
              <circle
                cx={coords.x}
                cy={coords.y}
                r={Math.max(2, Math.min(5, count * 0.8))}
                fill="#D4AF37"
                opacity="0.8"
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              />
              {hoveredState === state && (
                <g>
                  <rect
                    x={coords.x + 3}
                    y={coords.y - 8}
                    width="20"
                    height="auto"
                    fill="white"
                    stroke="#D4AF37"
                    strokeWidth="0.3"
                    rx="1"
                  />
                  <text
                    x={coords.x + 5}
                    y={coords.y - 3}
                    fontSize="3"
                    fill="#1A1A1A"
                    fontWeight="600"
                  >
                    {state}
                  </text>
                  <text
                    x={coords.x + 5}
                    y={coords.y + 1}
                    fontSize="2.5"
                    fill="#2C3E2C"
                  >
                    {count} installation{count > 1 ? 's' : ''}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl border border-moss/20 shadow-lg">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-gold"></div>
          <span className="text-charcoal font-medium">Installation Sites</span>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  const [selectedWasteType, setSelectedWasteType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate statistics
  const stats = useMemo(() => {
    const installed = caseStudiesData.filter(item => item.status === "Installed");
    const totalCapacity = installed.reduce((sum, item) => sum + item.capacity, 0);
    const uniqueStates = new Set(installed.map(item => item.state));
    
    return {
      totalInstallations: installed.length,
      totalCapacity: totalCapacity.toFixed(1),
      statesCovered: uniqueStates.size,
      upcomingInstallations: caseStudiesData.filter(item => item.status === "To be Installed").length
    };
  }, []);

  // Get unique waste types for filter
  const wasteTypes = useMemo(() => {
    const types = new Set(caseStudiesData.map(item => item.wasteType));
    return ['All', ...Array.from(types)];
  }, []);

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudiesData.filter(item => {
      const matchesWasteType = selectedWasteType === 'All' || item.wasteType === selectedWasteType;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
      const matchesSearch = 
        item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesWasteType && matchesStatus && matchesSearch;
    });
  }, [selectedWasteType, selectedStatus, searchQuery]);

  return (
    <>
      <SEO
        title="Case Studies | Solwaste - Real Impact Across India"
        description="Explore our 500+ waste management installations across India. See real case studies from government institutions, municipalities, and enterprises."
        keywords="solwaste case studies, waste management installations, India waste solutions, municipal waste management"
        ogImage="https://solwaste.co/og-case-studies.jpg"
      />

      <div className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-moss to-charcoal text-cream overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                Real Impact
              </span>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-6">
                Proven Solutions Across India
              </h1>

              <p className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
                From government institutions to municipal corporations, our waste management solutions 
                are transforming how India handles organic waste. See where we've made a difference.
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        </section>

        {/* Impact Summary Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl border border-moss/10 shadow-sm hover:shadow-lg transition-all"
              >
                <Factory className="text-gold mx-auto mb-3" size={32} />
                <div className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-1">
                  {stats.totalInstallations}
                </div>
                <div className="text-sm text-charcoal/70">Total Installations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-moss/10 shadow-sm hover:shadow-lg transition-all"
              >
                <TrendingUp className="text-moss mx-auto mb-3" size={32} />
                <div className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-1">
                  {stats.totalCapacity}
                </div>
                <div className="text-sm text-charcoal/70">TPD Capacity</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white rounded-2xl border border-moss/10 shadow-sm hover:shadow-lg transition-all"
              >
                <MapPin className="text-terra mx-auto mb-3" size={32} />
                <div className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-1">
                  {stats.statesCovered}
                </div>
                <div className="text-sm text-charcoal/70">States Covered</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-white rounded-2xl border border-moss/10 shadow-sm hover:shadow-lg transition-all"
              >
                <Clock className="text-gold mx-auto mb-3" size={32} />
                <div className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-1">
                  {stats.upcomingInstallations}
                </div>
                <div className="text-sm text-charcoal/70">Upcoming Projects</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study Cards Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                Featured Projects
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-charcoal">
                Installation Showcase
              </h2>
            </motion.div>

            {/* Filters */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl border border-moss/10 shadow-sm">
                {/* Search */}
                <div className="relative flex-1 w-full md:max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={18} />
                  <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-moss/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Waste Type Filter */}
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-charcoal/60" />
                  <select
                    value={selectedWasteType}
                    onChange={(e) => setSelectedWasteType(e.target.value)}
                    className="px-4 py-2 border border-moss/20 rounded-lg focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  >
                    {wasteTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border border-moss/20 rounded-lg focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  >
                    <option value="All">All Status</option>
                    <option value="Installed">Installed</option>
                    <option value="To be Installed">Upcoming</option>
                  </select>
                </div>
              </div>

              {/* Results count */}
              <p className="text-sm text-charcoal/60 mt-4 text-center">
                Showing {filteredCaseStudies.length} of {caseStudiesData.length} installations
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.sNo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl border border-moss/10 p-6 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      study.status === "Installed" 
                        ? "bg-moss/10 text-moss" 
                        : "bg-gold/10 text-gold"
                    }`}>
                      {study.status === "Installed" ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <Clock size={14} />
                      )}
                      {study.status}
                    </span>
                    <span className="text-xs text-charcoal/40 font-medium">#{study.sNo}</span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-lg font-sans font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {study.clientName}
                  </h3>

                  {/* Location */}
                  <div className="flex items-start gap-2 text-sm text-charcoal/70 mb-4">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5 text-terra" />
                    <span>{study.location}</span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 pt-4 border-t border-moss/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/60">Capacity:</span>
                      <span className="font-semibold text-charcoal">{study.capacity} TPD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/60">Waste Type:</span>
                      <span className="font-semibold text-charcoal">{study.wasteType}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No results message */}
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-charcoal/60">No installations found matching your filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Full Project List Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-moss/5 to-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-moss uppercase tracking-[0.3em] text-xs font-semibold">
                Complete Database
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-charcoal">
                Full Project List
              </h2>
            </motion.div>

            <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-moss/10 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-moss/5 border-b border-moss/10">
                    <tr>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">S.No</th>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">Client Name</th>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">Location</th>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">Capacity</th>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">Waste Type</th>
                      <th className="px-4 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-moss/10">
                    {caseStudiesData.map((study) => (
                      <motion.tr
                        key={study.sNo}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hover:bg-moss/5 transition-colors"
                      >
                        <td className="px-4 py-4 text-sm text-charcoal/60">{study.sNo}</td>
                        <td className="px-4 py-4 text-sm font-medium text-charcoal">{study.clientName}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{study.location}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{study.capacity} TPD</td>
                        <td className="px-4 py-4 text-sm">
                          <span className="inline-block px-2 py-1 bg-gold/10 text-gold text-xs font-medium rounded">
                            {study.wasteType}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                            study.status === "Installed"
                              ? "bg-moss/10 text-moss"
                              : "bg-gold/10 text-gold"
                          }`}>
                            {study.status === "Installed" ? (
                              <CheckCircle2 size={12} />
                            ) : (
                              <Clock size={12} />
                            )}
                            {study.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
