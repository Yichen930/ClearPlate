# ClearPlate - Sustainable Food Waste Tracking App

A cohesive React web application that stitches together multiple screens into a unified user journey for tracking food waste and earning sustainability rewards.

## Features

### Navigation Architecture
- **Bottom Navigation Bar**: Standardized 4-tab navigation (Home, Analytics, Rewards, Profile)
- **Floating Action Button (FAB)**: Central "Scan" button for Automatic Tray Return System

### Core User Flows

#### 1. Ordering Flow (Discovery to Confirmation)
- Start on Home Dashboard
- Tap "Order Now" on AI Recommendation Card or select a stall
- Navigate to Portion Selection Preview
- Select portion size (Small/Regular/Large) with dynamic plate scaling
- Confirm order and return to Home Dashboard

#### 2. Sustainability Loop (Physical to Digital)
- Open Automatic Tray Return System via central "Scan" button
- Automatic recognition with Step 1 and Step 2 overlays
- Automatic transition to Scan Success Summary Pop-up
- "View Impact" button navigates to Analytics Hub (Personal view)

#### 3. Data Insights (Toggle Logic)
- Analytics Hub with Personal/Community toggle
- **Personal View**: Weekly Breakdown, Eco Score, CO2 Saved
- **Community View**: Total Waste Saved, Top Performing Stall, Waste per Portion Size

#### 4. Reward Redemption Flow
- Navigate to Rewards Redemption Marketplace
- Items show "Redeem Now" (if affordable) or "Insufficient Credits" (if not)
- Confirmation modal for redemption
- Credits deducted from balance
- Redeemed vouchers tracked

### State Management
- **Credit Sync**: Balance (450 credits) synced across Analytics Hub, Rewards Marketplace, and Scan Success Pop-up
- **Consistent Theming**: #4CAF50 green for primary actions, soft shadows (elevation 2-4) on data cards
- **Transitions**: Slide Left for forward progress, Slide Up for modal overlays

### Profile & Data Flow
- Facial Recognition toggle with haptic feedback
- Personal Impact cards (CO2 Saved, Meals Rescued) aggregate from scan history

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:3000`

## Project Structure

```
ClearPlate/
├── src/
│   ├── components/
│   │   ├── BottomNavigation.jsx    # Global navigation with FAB
│   │   └── ScanSuccessPopup.jsx     # Success overlay modal
│   ├── context/
│   │   └── AppContext.jsx            # Global state management
│   ├── pages/
│   │   ├── HomeDashboard.jsx        # Main dashboard with AI recommendations
│   │   ├── PortionSelection.jsx     # Portion selection with dynamic scaling
│   │   ├── AnalyticsHub.jsx         # Personal/Community analytics toggle
│   │   ├── ScanScreen.jsx           # Automatic tray return scanning
│   │   ├── RewardsMarketplace.jsx   # Reward redemption marketplace
│   │   └── ProfileScreen.jsx        # User profile & settings
│   ├── App.jsx                      # Main app with routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies Used

- **React 18** - UI framework
- **React Router DOM** - Navigation and routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Material Icons** - Icon library

## Key Implementation Details

### State Management
- Uses React Context API for global state
- Credits balance synced across all components
- Scan history tracked for analytics
- Personal impact metrics calculated from scan data

### Navigation
- React Router for client-side routing
- Bottom navigation persists across all screens
- FAB positioned centrally in navigation bar

### Transitions
- Slide Left: Used for forward navigation (Order → Selection)
- Slide Up: Used for modal overlays (Scan Success)

### Theming
- Primary color: #4CAF50 (green)
- Consistent card shadows (elevation 2-4)
- Dark mode support

## User Journey Flow

1. **Home Dashboard** → Tap "Order Now" → **Portion Selection** → Confirm → Back to Home
2. **Home Dashboard** → Tap Scan FAB → **Scan Screen** → Auto-success → **Scan Success Popup** → View Impact → **Analytics Hub**
3. **Analytics Hub** → Toggle Personal/Community → View different insights
4. **Rewards Marketplace** → Redeem reward → Confirmation → Credits deducted
5. **Profile** → Toggle Facial Recognition → View Personal Impact

## Future Enhancements

- Real-time camera integration for scanning
- Backend API integration
- User authentication
- Push notifications
- Advanced analytics visualizations
- Social sharing features
