import { Link } from 'react-router-dom';
import { Github, Mail, MapPin } from 'lucide-react';
import ptithcmLogo from '@/assets/ptithcm-logo.png';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={ptithcmLogo} alt="PTITHCM" className="h-12 w-12" />
              <div>
                <div className="text-xl font-heading font-bold text-foreground">
                  TDETECTORS
                </div>
                <div className="text-sm text-muted-foreground">PTITHCM</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Hệ thống theo dõi và tái định danh phương tiện đa camera với hiệu
              năng tối ưu trên CPU.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/problem"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Bối cảnh vấn đề
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link
                  to="/architecture"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kiến trúc hệ thống
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kết quả
                </Link>
              </li>
              <li>
                <Link
                  to="/future"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tương lai
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Công nghệ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/yolo"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  YOLOv12
                </Link>
              </li>
              <li>
                <Link
                  to="/vit"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vision Transformer
                </Link>
              </li>
              <li>
                <Link
                  to="/openvino"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  OpenVINO
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Học viện Công nghệ Bưu chính Viễn thông TP.HCM</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:n22dccn077@student.ptithcm.edu.vn"
                  className="hover:text-primary transition-colors"
                >
                  n22dccn077@student.ptithcm.edu.vn
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://github.com/ThaiTOm/Tdetectors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Tdetectors Research Team. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
