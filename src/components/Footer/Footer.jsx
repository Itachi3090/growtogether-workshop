import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div class="footer-top">
                <div>
                    <div class="footer-brand">Grow Together</div>
                    <p class="footer-tagline">A premium wedding photography & Lightroom editing workshop by MMPF. Teaching
                        photographers to see, feel, and tell the story of love.</p>
                </div>
                <div class="footer-col">
                    <h4>Workshop</h4>
                    <ul class="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#curriculum">Curriculum</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#testimonials">Stories</a></li>
                        <li><a href="#booking">Reserve</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <ul class="footer-links">
                        <li><a href="https://www.instagram.com/mmpf.in" target="_blank">Instagram</a></li>
                        <li><a href="https://wa.me/917262081035" target="_blank">WhatsApp</a></li>
                        <li>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=harshmore007.hm@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                hello@mmpf.in
                            </a>
                        </li>
                        <li><a href="student-portal.html">Student Portal</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2024 MMPF Grow Together. All rights reserved.</span>
                <div class="social-links">
                    <a href="https://instagram.com/mmpf.in" target="_blank">Instagram</a>
                    <a href="https://wa.me/917262081035" target="_blank">WhatsApp</a>
                    <a href="admin.html">Admin</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;