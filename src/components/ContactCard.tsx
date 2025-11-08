import { Contact } from "@/types/contact";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, Building2, MapPin } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-smooth)] border-border bg-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-lg">
                {contact.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
                {contact.name}
              </h3>
              <p className="text-sm text-muted-foreground">@{contact.username}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-2 border-t border-border">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <a 
                href={`mailto:${contact.email}`}
                className="text-foreground hover:text-primary transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <a 
                href={`tel:${contact.phone}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Globe className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <a 
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors break-all"
              >
                {contact.website}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Building2 className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                <p className="text-foreground font-medium">{contact.company.name}</p>
                <p className="text-muted-foreground italic text-xs">{contact.company.catchPhrase}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-muted-foreground">
                {contact.address.suite} {contact.address.street}, {contact.address.city}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
