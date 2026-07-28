import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { hotelData } from "@/data/hotels";
export default function SitemapPage(){return <LegalPage title="Sitemap"><nav aria-label="Website sitemap" className="grid gap-3 sm:grid-cols-2"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/hotels">Hotels</Link><Link href="/banquet">Banquet</Link><Link href="/contact">Contact</Link>{hotelData.map(h=><Link key={h.slug} href={`/hotels/${h.slug}`}>{h.name}</Link>)}</nav></LegalPage>}
