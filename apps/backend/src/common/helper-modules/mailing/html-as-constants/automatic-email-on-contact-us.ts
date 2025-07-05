export const emailOnContactTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Himalaya Restaurant</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 30px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 40 L40 20 L60 40 L40 60 Z" fill="white" opacity="0.1"/></svg>') repeat;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translateX(0px) translateY(0px); }
            100% { transform: translateX(-50px) translateY(-50px); }
        }
        
        .logo {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        
        .mountain-logo {
            width: 80px;
            height: 50px;
            margin: 0 auto 15px;
            position: relative;
            z-index: 1;
        }
        
        .mountain-logo svg {
            width: 100%;
            height: 100%;
        }
        
        .tagline {
            font-size: 16px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        
        .greeting {
            font-size: 24px;
            color: #2c3e50;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .message {
            font-size: 16px;
            margin-bottom: 25px;
            text-align: center;
            color: #555;
        }
        
        .info-box {
            background: #fff;
            border: 2px solid #e74c3c;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
        }
        
        .info-title {
            font-size: 18px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
        }
        
        .contact-info {
            margin: 10px 0;
        }
        
        .contact-info strong {
            color: #e74c3c;
            display: inline-block;
            min-width: 80px;
        }
        
        .hours-section {
            background: #fff;
            border: 2px solid #e74c3c;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
        }
        
        .hours-title {
            font-size: 18px;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 15px;
        }
        
        .hours-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .hours-item {
            flex: 1;
            min-width: 120px;
            font-size: 14px;
        }
        
        .footer {
            background: #2c3e50;
            color: white;
            padding: 25px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer-note {
            opacity: 0.8;
            margin-top: 10px;
            font-style: italic;
        }
        
        .social-links {
            margin: 15px 0;
        }
        
        .social-links a {
            color: #e74c3c;
            text-decoration: none;
            margin: 0 10px;
            font-weight: bold;
        }
        
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 15px 0;
            transition: transform 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                width: 100%;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .header {
                padding: 20px 15px;
            }
            
            .logo {
                font-size: 28px;
            }
            
            .hours-list {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="mountain-logo">
                <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 50 L25 20 L40 50 Z" fill="white" opacity="0.9"/>
                    <path d="M30 50 L50 15 L70 50 Z" fill="white" opacity="1"/>
                    <path d="M60 50 L80 25 L100 50 Z" fill="white" opacity="0.9"/>
                    <path d="M20 50 L25 40 L30 50 Z" fill="white" opacity="0.6"/>
                    <path d="M45 50 L50 35 L55 50 Z" fill="white" opacity="0.7"/>
                    <path d="M75 50 L80 40 L85 50 Z" fill="white" opacity="0.6"/>
                </svg>
            </div>
            <div class="logo">HIMALAYA</div>
            <div class="tagline">Nepalese & Indian Cuisine<br>喜瑪拉雅餐廳</div>
        </div>
        
        <div class="content">
            <div class="greeting">Thank You for Contacting Us!</div>
            
            <div class="message">
                We have received your message and greatly appreciate your interest in Himalaya Restaurant. 
                Our team will respond to your inquiry within 24 hours.
            </div>
            
            <div class="info-box">
                <div class="info-title">🍽️ Restaurant Information</div>
                <div class="contact-info">
                    <strong>Email:</strong> himalaya.2007hk@gmail.com
                </div>
                <div class="contact-info">
                    <strong>Cuisine:</strong> Authentic Nepalese & Indian Dishes
                </div>
                <div class="contact-info">
                    <strong>Specialties:</strong> Traditional Himalayan flavors, Fresh ingredients, Warm hospitality
                </div>
            </div>
            
            <div class="hours-section">
                <div class="hours-title">🕒 Operating Hours</div>
                <div class="hours-list">
                    <div class="hours-item">
                        <strong>Mon-Sun</strong><br>
                        11:00 AM - 10:00 PM
                    </div>
                </div>
                <div style="margin-top: 10px; font-size: 12px; color: #666;">
                    *Hours may vary on holidays
                </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <p>In the meantime, we invite you to experience the authentic tastes of the Himalayas!</p>
                <a href="#" class="btn">View Our Menu</a>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h3 style="color: #e74c3c; margin-top: 0;">🌟 Why Choose Himalaya Restaurant?</h3>
                <ul style="list-style: none; padding: 0;">
                    <li>✓ Authentic Nepalese & Indian recipes passed down through generations</li>
                    <li>✓ Fresh, high-quality ingredients sourced daily</li>
                    <li>✓ Warm, family-friendly atmosphere</li>
                    <li>✓ Vegetarian and non-vegetarian options available</li>
                    <li>✓ Takeaway and dine-in services</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <div>
                <strong>Himalaya Restaurant</strong><br>
                Nepalese & Indian Cuisine | 喜瑪拉雅餐廳
            </div>
            <div class="social-links">
                <a href="mailto:himalaya.2007hk@gmail.com">Email Us</a> |
                <a href="#">Find Us</a> |
                <a href="#">Reviews</a>
            </div>
            <div class="footer-note">
                This is an automated message. Please do not reply directly to this email.<br>
                For immediate assistance, please call us or visit our restaurant.
            </div>
        </div>
    </div>
</body>
</html>`;
