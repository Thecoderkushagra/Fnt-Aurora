import { useState } from 'react';
import { CreditCard, Download, Check, Zap, Crown, Rocket, Calendar, DollarSign, TrendingUp, AlertCircle, Plus, Trash2, Edit2 } from 'lucide-react';

const Billing = () => {
    const [currentPlan, setCurrentPlan] = useState('premium');
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
    const [showAddCard, setShowAddCard] = useState(false);

    const plans = [
        {
            id: 'free',
            name: 'Free',
            icon: Zap,
            price: { monthly: 0, yearly: 0 },
            features: [
                '100 API calls per day',
                'Basic support',
                '1 team member',
                'Community access',
                '5GB storage'
            ],
            color: 'gray'
        },
        {
            id: 'premium',
            name: 'Premium',
            icon: Crown,
            price: { monthly: 29, yearly: 290 },
            popular: true,
            features: [
                '10,000 API calls per day',
                'Priority support',
                '5 team members',
                'Advanced analytics',
                '100GB storage',
                'Custom integrations'
            ],
            color: 'amber'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            icon: Rocket,
            price: { monthly: 99, yearly: 990 },
            features: [
                'Unlimited API calls',
                '24/7 dedicated support',
                'Unlimited team members',
                'Advanced analytics & reporting',
                '1TB storage',
                'Custom integrations',
                'SLA guarantee',
                'White-label options'
            ],
            color: 'purple'
        }
    ];

    const paymentMethods = [
        {
            id: 1,
            type: 'Visa',
            last4: '4242',
            expiry: '12/25',
            isDefault: true
        },
        {
            id: 2,
            type: 'Mastercard',
            last4: '8888',
            expiry: '08/26',
            isDefault: false
        }
    ];

    const billingHistory = [
        {
            id: 'INV-2026-001',
            date: '2026-02-01',
            description: 'Premium Plan - Monthly',
            amount: 29.00,
            status: 'paid',
            downloadUrl: '#'
        },
        {
            id: 'INV-2026-002',
            date: '2026-01-01',
            description: 'Premium Plan - Monthly',
            amount: 29.00,
            status: 'paid',
            downloadUrl: '#'
        },
        {
            id: 'INV-2025-012',
            date: '2025-12-01',
            description: 'Premium Plan - Monthly',
            amount: 29.00,
            status: 'paid',
            downloadUrl: '#'
        },
        {
            id: 'INV-2025-011',
            date: '2025-11-01',
            description: 'Premium Plan - Monthly',
            amount: 29.00,
            status: 'paid',
            downloadUrl: '#'
        }
    ];

    const usageMetrics = [
        {
            label: 'API Calls This Month',
            current: 7543,
            limit: 10000,
            unit: 'calls'
        },
        {
            label: 'Storage Used',
            current: 45,
            limit: 100,
            unit: 'GB'
        },
        {
            label: 'Team Members',
            current: 3,
            limit: 5,
            unit: 'members'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            gray: {
                bg: 'bg-gray-500/20',
                text: 'text-gray-300',
                border: 'border-gray-500/30',
                button: 'bg-gray-600 hover:bg-gray-700'
            },
            amber: {
                bg: 'bg-amber-500/20',
                text: 'text-amber-300',
                border: 'border-amber-500/30',
                button: 'bg-amber-600 hover:bg-amber-700'
            },
            purple: {
                bg: 'bg-purple-500/20',
                text: 'text-purple-300',
                border: 'border-purple-500/30',
                button: 'bg-purple-600 hover:bg-purple-700'
            }
        };
        return colors[color];
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getUsagePercentage = (current, limit) => {
        return (current / limit) * 100;
    };

    const getUsageColor = (percentage) => {
        if (percentage >= 90) return 'bg-red-500';
        if (percentage >= 75) return 'bg-yellow-500';
        return 'bg-blue-500';
    };

    return (
        <div className="min-h-screen text-gray-100 p-6 flex gap-6">

            <main className="flex-grow max-w-6xl">
                <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>

                {/* Current Usage Metrics */}
                {/* <div className="bg-[#212529] rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <TrendingUp size={20} />
                        Current Usage
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {usageMetrics.map((metric, index) => {
                            const percentage = getUsagePercentage(metric.current, metric.limit);
                            return (
                                <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm text-gray-400">{metric.label}</span>
                                        {percentage >= 90 && (
                                            <AlertCircle size={16} className="text-red-400" />
                                        )}
                                    </div>
                                    <div className="text-2xl font-bold mb-2">
                                        {metric.current.toLocaleString()} 
                                        <span className="text-sm text-gray-400 font-normal"> / {metric.limit.toLocaleString()} {metric.unit}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full transition-all ${getUsageColor(percentage)}`}
                                            style={{ width: `${Math.min(percentage, 100)}%` }}
                                        />
                                    </div>
                                    {percentage >= 90 && (
                                        <p className="text-xs text-red-400 mt-2">Approaching limit</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div> */}

                {/* Subscription Plans */}
                <div className="bg-[#212529] rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Subscription Plans</h2>
                        <div className="bg-gray-800 rounded-lg p-1 flex gap-1">
                            <button 
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    billingCycle === 'monthly' 
                                        ? 'bg-blue-600 text-white' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Monthly
                            </button>
                            <button 
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    billingCycle === 'yearly' 
                                        ? 'bg-blue-600 text-white' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Yearly
                                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                                    Save 17%
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan) => {
                            const Icon = plan.icon;
                            const colors = getColorClasses(plan.color);
                            const isCurrentPlan = currentPlan === plan.id;
                            const price = plan.price[billingCycle];
                            const monthlyPrice = billingCycle === 'yearly' ? (price / 12).toFixed(2) : price;

                            return (
                                <div 
                                    key={plan.id}
                                    className={`relative bg-gray-800/50 rounded-lg p-6 border-2 transition-all ${
                                        isCurrentPlan 
                                            ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                                            : 'border-gray-700 hover:border-gray-600'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                MOST POPULAR
                                            </span>
                                        </div>
                                    )}
                                    
                                    {isCurrentPlan && (
                                        <div className="absolute -top-3 right-4">
                                            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Check size={12} />
                                                Current
                                            </span>
                                        </div>
                                    )}

                                    <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                                        <Icon className={colors.text} size={24} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold">${price}</span>
                                        <span className="text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                                        {billingCycle === 'yearly' && (
                                            <div className="text-sm text-gray-400 mt-1">
                                                ${monthlyPrice}/month billed annually
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button 
                                        className={`w-full py-3 rounded-lg font-medium transition-colors ${
                                            isCurrentPlan 
                                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                                                : `${colors.button} text-white`
                                        }`}
                                        disabled={isCurrentPlan}
                                    >
                                        {isCurrentPlan ? 'Current Plan' : 'Upgrade to ' + plan.name}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Payment Methods */}
                {/* <div className="bg-[#212529] rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <CreditCard size={20} />
                            Payment Methods
                        </h2>
                        <button 
                            onClick={() => setShowAddCard(!showAddCard)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                            <Plus size={18} />
                            Add Card
                        </button>
                    </div>

                    {showAddCard && (
                        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mb-4">
                            <h3 className="font-semibold mb-4">Add New Payment Method</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="text-sm text-gray-400 mb-2 block">Card Number</label>
                                    <input 
                                        type="text" 
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Expiry Date</label>
                                    <input 
                                        type="text" 
                                        placeholder="MM/YY"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">CVV</label>
                                    <input 
                                        type="text" 
                                        placeholder="123"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="md:col-span-2 flex gap-3">
                                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                                        Add Card
                                    </button>
                                    <button 
                                        onClick={() => setShowAddCard(false)}
                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <div 
                                key={method.id}
                                className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <CreditCard className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">{method.type} •••• {method.last4}</span>
                                            {method.isDefault && (
                                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                                    Default
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-400">Expires {method.expiry}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                                        <Edit2 size={16} className="text-gray-400" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                                        <Trash2 size={16} className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Billing History */}
                <div className="bg-[#212529] rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Calendar size={20} />
                        Billing History
                    </h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Invoice</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Date</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Description</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Amount</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {billingHistory.map((invoice) => (
                                    <tr key={invoice.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                                        <td className="py-4 px-4">
                                            <span className="font-mono text-sm">{invoice.id}</span>
                                        </td>
                                        <td className="py-4 px-4 text-gray-300">
                                            {formatDate(invoice.date)}
                                        </td>
                                        <td className="py-4 px-4 text-gray-300">
                                            {invoice.description}
                                        </td>
                                        <td className="py-4 px-4 font-semibold">
                                            {formatCurrency(invoice.amount)}
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                invoice.status === 'paid' 
                                                    ? 'bg-green-500/20 text-green-400' 
                                                    : 'bg-red-500/20 text-red-400'
                                            }`}>
                                                {invoice.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                                <Download size={16} />
                                                <span className="text-sm">Download</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Next Billing Date */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                        <DollarSign className="text-blue-400 mt-0.5" size={20} />
                        <div>
                            <h3 className="font-semibold text-blue-300 mb-1">Next Billing Date</h3>
                            <p className="text-sm text-gray-300">
                                Your next payment of <span className="font-semibold">${plans.find(p => p.id === currentPlan)?.price[billingCycle]}</span> will be charged on <span className="font-semibold">March 1, 2026</span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Billing;