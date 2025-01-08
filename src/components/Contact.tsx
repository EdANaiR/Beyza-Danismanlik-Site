"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ad soyad en az 2 karakter olmalıdır" }),
  phone: z
    .string()
    .min(10, { message: "Geçerli bir telefon numarası giriniz" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  subject: z.string().min(1, { message: "Lütfen bir konu seçiniz" }),
});

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await submitContactForm(formData);
    setSubmitStatus(result);

    if (result.success) {
      form.reset();
    }
  }

  return (
    <section id="iletisim" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className=" p-8 rounded-lg ">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#445D3B] mb-12">
              Detaylı Bilgi Almak İçin
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="h-6 w-6 text-[#445D3B] shrink-0 mt-1 opacity-80" />
                <p className="text-gray-600 text-lg">
                  Mutlukent Mahallesi - Ankara İş sitesi, 2023. Sokak Numara:21
                  Beysukent, 06810 Çankaya/Ankara
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="h-6 w-6 text-[#445D3B] opacity-80" />
                <div className="space-y-1">
                  <p className="text-gray-600 text-lg">+90 312 235 57 05</p>
                  <p className="text-gray-600 text-lg">+90 (532) 162 48 92</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="h-6 w-6 text-[#445D3B] opacity-80" />
                <p className="text-gray-600 text-lg">info@sedefyildiz.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#445D3B] mb-12">
              Randevu Talebi Formu
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Ad Soyad*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ad Soyad"
                          {...field}
                          className="border-gray-200 focus:border-[#445D3B] h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Telefon*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Telefon"
                          {...field}
                          className="border-gray-200 focus:border-[#445D3B] h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">E-posta*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E-posta"
                          {...field}
                          className="border-gray-200 focus:border-[#445D3B] h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Danışmanlık Almak İstediğiniz Konu*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-200 focus:border-[#445D3B] h-12">
                            <SelectValue placeholder="Konu seçiniz" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="couple">Çift Terapisi</SelectItem>
                          <SelectItem value="individual">
                            Bireysel Terapi
                          </SelectItem>
                          <SelectItem value="family">
                            Aile Danışmanlığı
                          </SelectItem>
                          <SelectItem value="child">
                            Çocuk - Ergen Terapisi
                          </SelectItem>
                          <SelectItem value="divorce">
                            Boşanma ve Yas Süreçleri
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#445D3B] hover:bg-[#445D3B]/90 text-white h-12 text-lg"
                  >
                    Gönder
                  </Button>
                </div>
              </form>
            </Form>
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
